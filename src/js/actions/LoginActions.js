import dispatcher from "../dispatcher";
import * as LoginAPI from "../util/LoginAPI"


export function login(username, password){

    if(username == 'admin' && password=='admin'){

        const user = {
            "name": "Admin",
            "lastName": "",
            "username": "admin",
            "password": "admin",
            "cart":[]
        };

        dispatcher.dispatch({type:"LOGIN", user:user})

    }

    else{

    const url = `http://localhost:8000/api/login`;
    LoginAPI
        .getLogin(url, username, password)
        .then(response => {
           if(response.login==true){
               dispatcher.dispatch({type:"LOGIN", user:response.user})
           }
           else{
               dispatcher.dispatch({type:"FAILED_LOGIN"})
           }

        })
        .catch(message => {
            alert(`LOGIN SERVER ERROR!, please check that API server is up, please run npm start from /server folder, or login with user=admin, password=admin for demo.`);
        });
    }
}

export function logout(){

    dispatcher.dispatch({type:"LOGOUT"})

}
