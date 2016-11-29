import React from "react";

import Product from '../product/Product'
import * as ProductActions from "../../actions/ProductActions";
import ProductStore from "../../stores/ProductStore";
import * as CartActions from "../../actions/CartActions";


export default class Products extends React.Component {

    constructor() {
        super();
        this.getProducts = this.getProducts.bind(this);
        this.state = {
            products: ProductStore.getAll(),
        };
    }

    componentWillMount() {

        ProductStore.on("change", this.getProducts);
    }

    componentWillUnmount() {
        ProductStore.removeListener("change", this.getProducts);
    }

    componentDidMount(){

        ProductActions.clearSearch();
        ProductActions.loadProducts();

    }

    getProducts() {
        this.setState({
            products: ProductStore.getAll(),
        });

    }

    clickBody(){
        CartActions.hideCart();
    }

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

