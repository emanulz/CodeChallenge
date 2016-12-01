
import React from 'react';
import { Link } from 'react-router';


export default class TopBarLogin extends React.Component {

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
