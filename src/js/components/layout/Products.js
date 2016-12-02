/*
 * Module dependencies
 */
import React from "react";

import Product from '../product/Product'
import * as ProductActions from "../../actions/ProductActions";
import ProductStore from "../../stores/ProductStore";
import * as CartActions from "../../actions/CartActions";
import LoginStore from "../../stores/LoginStore";


export default class Products extends React.Component {

    constructor() {
        super();
        this.getProducts = this.getProducts.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.state = {
            products: ProductStore.getProducts()
        };
    }

    componentWillMount() {

        ProductStore.on("change", this.getProducts);
        LoginStore.on("logout", this.redirectToLogin);
    }

    componentWillUnmount() {
        ProductStore.removeListener("change", this.getProducts);
        ProductStore.removeListener("logout", this.redirectToLogin);
    }

    componentDidMount(){

        ProductActions.clearSearch();
        ProductActions.loadProducts();


    }

    getProducts() {

        this.setState({
            products: ProductStore.getProducts(),
        });

    }

    // Hides cart on body click
    clickBody(){
        CartActions.hideCart();
    }

    redirectToLogin(){
        window.location.assign("/#/login");
    }
    // Renders All Products on state in a grid view
    render() {
        const { products } = this.state;

        const ProductComponents = products.map((product) => {
            return <Product key={product.sku}  product={product}/>
        });

        return (
            <div onClick={this.clickBody} className="products-container" >
                {ProductComponents}
            </div>
        );
    }
}

