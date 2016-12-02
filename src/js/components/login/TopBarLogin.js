/*
 * Module dependencies
 */
import React from 'react';
import { Link } from 'react-router';

export default class TopBarLogin extends React.Component {
    // Top bar only for Login page
    render(){

        return  <div className="head-div">

                    <span>

                        <Link to="/">
                            <span className="title-app">
                                {this.props.appName}
                            </span>
                        </Link>

                    </span>

                </div>

    }

}
