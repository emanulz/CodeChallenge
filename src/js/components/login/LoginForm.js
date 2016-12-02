/*
 * Module dependencies
 */
import React from 'react';
import LoginStore from "../../stores/LoginStore";
import * as LoginActions from '../../actions/LoginActions'

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.redirectHome = this.redirectHome.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = { username: '', password:'', failed:false};
    }

    componentWillMount() {

        LoginStore.on("loginValid", this.redirectHome);
        LoginStore.on("loginError", this.handleError);
    }

    componentWillUnmount() {
        LoginStore.removeListener("change", this.redirectHome);
        LoginStore.removeListener("loginError", this.handleError);
    }

    // Go to Home after login
    redirectHome(){
        window.location.assign("/#");
    }

    // On login Error
    handleError(){
        this.setState({failed: true});
    }

    // Click on Login button
    clickLogin(ev){
        ev.preventDefault();
        LoginActions.login(this.state.username, this.state.password);

    }

    // Handel username field
    changeUsername(ev){
        this.setState({username: ev.target.value});
    }

    // Handel password field
    changePassword(ev){
        this.setState({password: ev.target.value});
    }

    // Login Form
    render(){

        let classToApply = (this.state.failed) ? 'login-failed-input': '';

        return  <div>
                    <form className="login-form">
                        <div className="login-failed" hidden={!this.state.failed}> User/Password error, please try again. </div>
                        <input className={classToApply} type="text" placeholder="username" value={this.state.username}
                               onChange={this.changeUsername.bind(this)}/>
                        <input className={classToApply} type="password" placeholder="password" value={this.state.password}
                               onChange={this.changePassword.bind(this)}/>
                        <button onClick={this.clickLogin.bind(this)} >login</button>
                    </form>
                </div>

    }

}