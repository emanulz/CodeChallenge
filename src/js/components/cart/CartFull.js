
import React from 'react';
import CartFullItem from"./CartFullItem"
import CartStore from "../../stores/CartStore";
import LoginStore from "../../stores/LoginStore";

import * as CartActions from "../../actions/CartActions";


export default class CartFull extends React.Component {

    constructor(props) {
        super(props);
        this.getCartProducts = this.getCartProducts.bind(this);
        this.state = { products: [], itemsInCart:0, cartTotal:0, cartVisible:false };
    }

    componentWillMount() {

        CartStore.on("change", this.getCartProducts);
        LoginStore.on("logout", this.redirectToLogin);
    }

    componentWillUnmount() {
        CartStore.removeListener("change", this.getCartProducts);
        LoginStore.removeListener("logout", this.redirectToLogin);
    }

    componentDidMount(){
        this.getCartProducts();
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

    redirectToLogin(){
        window.location.assign("/#/login");
    }

    render() {

        const { products } = this.state;

        const ProductCartComponents = products.map((product) => {
            return  <CartFullItem key={product[0].sku}
                              product = {product[0]}
                              qty = {product[1]}
                              removeItem ={this.removeFromCart.bind(this)}>
                    </CartFullItem>

        });


        return <div className="cart-full-container">

            <h2 className="cart-full-head" >Shopping Cart</h2>

            <div className="cart-full-body">

                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProductCartComponents}
                    </tbody>
                </table>



            </div>

            <div className="cart-full-footer" >Total: ${this.state.cartTotal.toFixed(2)}</div>
        </div>
    }

}

