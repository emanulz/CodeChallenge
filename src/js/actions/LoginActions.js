import dispatcher from "../dispatcher";


export function login(username, password){

    dispatcher.dispatch({type:"LOGIN", username:username, password:password})

}
