/*
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';
import * as CartActions from "../../actions/CartActions";


export default class NavigationBar extends React.Component {

    clickFullCart(ev){
        ev.preventDefault();
        window.location.assign("/#/cart");
        CartActions.hideCart();
    }

    render(){

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
                                    Profile
                                </span>
                            </Link>

                            <span className = "title-separator"  >|</span>

                            <Link to="/">
                                <span className="title-sub">
                                    Whish List
                                </span>
                            </Link>

                            <span className = "title-separator"  >|</span>

                            <a href="/#/cart"   onClick={this.clickFullCart}>
                                <span className="title-sub">
                                    Full Cart
                                </span>
                            </a>

                        </span>



                    </span>

                </div>

    }

}
