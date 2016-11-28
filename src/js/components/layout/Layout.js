/*
 * Module dependencies
 */

import React from 'react';

import Cart from '../cart/Cart'
import NavigationBar from './NavigationBar'
import Products from './Products'



export default class Layout extends React.Component {


    render(){

        return <div>

                    <NavigationBar appName={'Online Store'}>

                    </NavigationBar>


                    <Cart/>

                    <Products />
               </div>



    }




}