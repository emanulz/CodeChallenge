/*
 * Module dependencies
 */
import React from 'react';

import CartItem from"./CartItem"
import CartStore from "../../stores/CartStore";
import * as CartActions from "../../actions/CartActions";


export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.getCartProducts = this.getCartProducts.bind(this);
        this.state = { products: [], itemsInCart:0, cartTotal:0, cartVisible:false };
    }

    componentWillMount() {

        CartStore.on("change", this.getCartProducts);

    }

    componentWillUnmount() {
        CartStore.removeListener("change", this.getCartProducts);

    }

    // Gets all cart Data
    getCartProducts() {
        this.setState({
            products: CartStore.getCartProducts(),
            itemsInCart:CartStore.getItemsInCart(),
            cartTotal: CartStore.getCartTotal(),
            cartVisible : CartStore.getCartVisible(),
        });
    }

    //Remove item from cart
    removeFromCart(sku){
        CartActions.removeFromCart(sku);
    }

    // Go to Full Cart Page
    clickFullCart(){

        window.location.assign("/#/cart");
        CartActions.toggleCart();
    }


    render() {

        const { products } = this.state;

        const ProductCartComponents = products.map((product) => {
            return  <CartItem key={product[0].sku}
                              product = {product[0]}
                              qty = {product[1]}
                              removeItem ={this.removeFromCart.bind(this)}>
                    </CartItem>

        });

        const visible = this.state.cartVisible ? 'cart-container visible' : 'cart-container';

        // renders cart, only visible when button pressed
        return <div className={visible} >

                    <div className="cart-head" >Shopping Cart</div>

                    <div className="cart-body">

                        {ProductCartComponents}

                    </div>

                    <div className="cart-footer" >

                        Total: ${this.state.cartTotal.toFixed(2)}

                        <button onClick={this.clickFullCart.bind(this)} className="btn btn-success cart-btn-footer">
                                View Cart
                        </button>


                    </div>
                </div>
    }

}

