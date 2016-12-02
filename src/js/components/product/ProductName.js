/*
 * Module dependencies
 */

import React from 'react';


export default class ProductName extends React.Component {

    onUserClick(ev){

        ev.preventDefault();
        this.props.callBack();
    }
    // Product Name with link to open modal
    render() {
        if(this.props.product.name){
            return  <section>
                        <a onClick={this.onUserClick.bind(this)} className="product-name" href=""> {this.props.product.name}</a>
                    </section>
        }
        else{
            return  <section>
                        <a className="product-name" href=""> No Name Registered</a>
                    </section>
        }
    }


}

