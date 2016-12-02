/*
 * Module dependencies
 */
import React from 'react';
import { Link } from 'react-router';
import * as CartActions from "../../actions/CartActions";
import LoginStore from "../../stores/LoginStore";
import * as LoginActions from "../../actions/LoginActions";


export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: LoginStore.getLoggedIn(), user:LoginStore.getUser()};
    }

    // On full Cart click
    clickFullCart(ev){
        ev.preventDefault();
        window.location.assign("/#/cart");
        CartActions.hideCart();
    }

    // On logout Click
    callLogout(ev){
        ev.preventDefault();
        LoginActions.logout();
        CartActions.emptyCart();
    }

    render(){
        // Top Navigation Bar
        return  <div className="head-div">

                    <span>

                        <Link to="/">
                            <span className="title-app">
                                {this.props.appName}
                            </span>
                        </Link>

                        <span className="hide-on-mobile" >

                            <span className = "title-separator"  >|</span>

                            <Link to="/">
                                <span className="title-sub">
                                    Whish List
                                </span>
                            </Link>

                            <span className = "title-separator"  >|</span>

                            <a href="/#/cart"   onClick={this.clickFullCart}>
                                <span className="title-sub">
                                    View Cart
                                </span>
                            </a>

                        </span>

                        <span className = "title-separator"  >|</span>

                        <Link to="/login" hidden={this.state.loggedIn}>
                            <span className="title-sub">
                                Login
                            </span>
                        </Link>

                        <span className="title-sub-2" hidden={!this.state.loggedIn} >
                            Hello {this.state.user.name}&nbsp;
                            <a href="" onClick={this.callLogout.bind(this)}>
                                <span className="title-sub-">
                                    (Logout)
                                </span>
                            </a>
                        </span>

                    </span>

                </div>

    }

}
