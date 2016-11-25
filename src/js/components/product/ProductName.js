/*
 * Module dependencies
 */

import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';


export default class ProductName extends React.Component {

    onUserClick(ev){

        ev.preventDefault();
        this.props.callBack();

    }


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

