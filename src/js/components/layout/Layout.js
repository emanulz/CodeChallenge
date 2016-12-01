/*
 * Module dependencies
 */

import React from 'react';
import Cart from '../cart/Cart'
import TopBar from './TopBar'
import TopSearchCart from './TopSearchCart'



export default class Layout extends React.Component {


    render(){

        return <div>

                    <TopBar appName={'Online Store'} user="">

                    </TopBar>

                    <TopSearchCart>

                    </TopSearchCart>

                    <Cart/>

                    {this.props.children}

               </div>

    }

}