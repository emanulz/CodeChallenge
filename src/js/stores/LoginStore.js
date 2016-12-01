import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class LoginStore extends EventEmitter {

    constructor() {
        super();
        this.isLoggedIn = false;
        this.user = ""
    }

    getLoggedIn() {

        return this.isLoggedIn;
    }

    getUsername() {

        return this.user;
    }


    login(username, password) {

        if(username=='admin' && password=='admin'){
            this.isLoggedIn = true;
            this.user = username;
            this.emit("loginValid");
        }
        else{
            this.emit("loginError");
        }

    }

    logout() {


    }


    handleActions(action) {

        switch(action.type) {

            case "LOGIN": {
                this.login(action.username, action.password);
                break;
            }
            case "LOGOUT": {
                this.logout();
                break;
            }

        }
    }
}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));


export default loginStore;
