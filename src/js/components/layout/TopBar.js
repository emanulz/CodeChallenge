/*
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


export default class NavigationBar extends React.Component {



    render(){

        return  <div className="head-div">

                    <span>

                        <Link to="/">
                            <span className="title-app">
                                {this.props.appName}
                            </span>
                        </Link>

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

                        <Link to="/cart">
                            <span className="title-sub">
                                Full Cart
                            </span>
                        </Link>


                    </span>

                </div>

    }



}
