/*
 * Module dependencies
 */

import React from 'react';
import Products from './Products'
import NavigationBar from './NavigationBar'


export default class Layout extends React.Component {


    render(){

        return <div>
                    <header>
                        <NavigationBar appName={'Online Store'}>

                        </NavigationBar>
                    </header>

                    <Products />
               </div>



    }




}