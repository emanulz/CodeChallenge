/*
 * Module dependencies
 */
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class LoginStore extends EventEmitter {

    constructor() {
        super();
        // try to load data of user logged in from local storage.
        try{
            this.isLoggedIn = JSON.parse(localStorage.isLoggedIn);
            this.user = JSON.parse(localStorage.user);
        }
        catch(error) {
            this.isLoggedIn = false;
            this.user = '';
        }

    }

    //get functions used by components
    getLoggedIn() {

        return this.isLoggedIn;
    }

    getUser() {

        return this.user;
    }

    login(user) {

        this.isLoggedIn = true;
        this.user = user;
        this.emit("loginValid");
        // when login saves data to local storage
        localStorage.isLoggedIn=JSON.stringify(true);
        localStorage.user=JSON.stringify(user);

    }

    logout() {
        // Clears data on logout
        this.isLoggedIn = false;
        this.user = '';
        localStorage.isLoggedIn=JSON.stringify(false);
        localStorage.user=JSON.stringify('');
        this.emit("logout");
    }

    loginFailed(){
        this.emit("loginError");
    }

    //Handel actions triggered by dispatcher
    handleActions(action) {

        switch(action.type) {

            case "LOGIN": {
                this.login(action.user);
                break;
            }
            case "LOGOUT": {
                this.logout();
                break;
            }
            case "FAILED_LOGIN": {
                this.loginFailed();
                break;
            }

        }
    }
}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));


export default loginStore;
