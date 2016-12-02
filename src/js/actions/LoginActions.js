/*
 * Module dependencies
 */
import dispatcher from "../dispatcher";
import * as LoginAPI from "../util/LoginAPI"


export function login(username, password){

    // try to login with hardcoded user and password for demonstration only.
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

    // Post to Login API.
    else{

    const url = `http://localhost:8000/api/login`;
    LoginAPI
        .getLogin(url, username, password) // Returns a Promise
        .then(response => {//on success, check if login was successful
           if(response.login==true){
               dispatcher.dispatch({type:"LOGIN", user:response.user})
           }
           else{//otherwise triggered failed
               dispatcher.dispatch({type:"FAILED_LOGIN"})
           }

        })
        // On server error alerts a message
        .catch(message => {
            alert(`LOGIN SERVER ERROR!, please check that API server is up, please run npm start from /server folder, or login with user=admin, password=admin for demo.`);
        });
    }
}

// On logout triggers Logout action
export function logout(){

    dispatcher.dispatch({type:"LOGOUT"})

}
