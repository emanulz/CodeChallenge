/*
 * Module dependencies
 */
import React from 'react';
import TopBarLogin from './TopBarLogin'

export default class Login extends React.Component {

    // Login Main Component
    render(){

        return <div>

            <TopBarLogin appName={'Online Store'}>

            </TopBarLogin>

            <div className="login-form-container">

                <div>
                    Login to our Store
                </div>

                {this.props.children}
            </div>


        </div>

    }

}