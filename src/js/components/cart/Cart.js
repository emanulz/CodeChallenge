
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

    getCartProducts() {
        this.setState({
            products: CartStore.getCartProducts(),
            itemsInCart:CartStore.getItemsInCart(),
            cartTotal: CartStore.getCartTotal(),
            cartVisible : CartStore.getCartVisible(),
        });
    }

    removeFromCart(sku){
        CartActions.removeFromCart(sku);
    }

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

