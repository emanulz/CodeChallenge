/*
 * Module dependencies
 */
import React from 'react';

export default class CartItem extends React.Component {


    handleClick(ev){
        ev.preventDefault();
        this.props.removeItem(this.props.product.sku);
    }
    // Single Cart Item rendered
    render() {

        let price = (this.props.qty*this.props.product.price).toFixed(2);

        return  <div className="cart-item-container" >
                    <h4>{this.props.product.name} <button onClick={this.handleClick.bind(this)} className=" cart-remove-btn btn btn-danger">Remove</button> </h4>
                    <div> Quantity: {this.props.qty} - ${price} </div>
                </div>


    }

}

