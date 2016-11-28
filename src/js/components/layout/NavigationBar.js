/*
 * Module dependencies
 */

import React from 'react';
import CartStore from "../../stores/CartStore";
import * as CartActions from "../../actions/CartActions";


export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.getCartData = this.getCartData.bind(this);
        this.state = { itemsInCart:0, cartTotal:0 };
    }

    componentWillMount() {

        CartStore.on("change", this.getCartData);
    }

    componentWillUnmount() {

        CartStore.removeListener("change", this.getCartData);
    }

    getCartData(){

        this.setState({
            itemsInCart:CartStore.getItemsInCart(),
            cartTotal: CartStore.getCartTotal(),

        });

    }

    toggleCart(ev){
        ev.preventDefault();
        CartActions.toggleCart();
    }


    render(){

        return  <div className="head-div">

                    <span>
                        <div className="title-div">
                            {this.props.appName}
                        </div>
                    </span>

                    <span className="view-cart-span">
                        <button onClick={this.toggleCart} className="view-cart-btn">
                            {`View Cart (${this.state.itemsInCart})`}
                        </button>
                    </span>

                </div>



    }




}
