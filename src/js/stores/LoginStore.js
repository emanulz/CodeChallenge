import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class LoginStore extends EventEmitter {

    constructor() {
        super();
        try{
            this.isLoggedIn = JSON.parse(localStorage.isLoggedIn);
            this.user = JSON.parse(localStorage.user);
        }
        catch(error) {
            this.isLoggedIn = false;
            this.user = '';
        }

    }

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
        localStorage.isLoggedIn=JSON.stringify(true);
        localStorage.user=JSON.stringify(user);

    }

    loginfailed(){
        this.emit("loginError");
    }

    logout() {

        this.isLoggedIn = false;
        this.user = '';
        localStorage.isLoggedIn=JSON.stringify(false);
        localStorage.user=JSON.stringify('');
        this.emit("logout");
    }


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
                this.loginfailed();
                break;
            }

        }
    }
}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));


export default loginStore;
