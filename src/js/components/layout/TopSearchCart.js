/*
 * Module dependencies
 */

import React from 'react';
import CartStore from "../../stores/CartStore";
import ProductStore from "../../stores/ProductStore";
import * as CartActions from "../../actions/CartActions";


export default class TopSearchCart extends React.Component {

    constructor(props) {
        super(props);
        this.getCartData = this.getCartData.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.state = { itemsInCart:0, cartTotal:0, query:''};
    }

    componentWillMount() {
        CartStore.on("change", this.getCartData);
        ProductStore.on("clear", this.clearSearch);
    }

    componentWillUnmount() {

        CartStore.removeListener("change", this.getCartData);
        ProductStore.removeListener("clear", this.clearSearch);

    }


    getCartData(){

        this.setState({
            itemsInCart:CartStore.getItemsInCart(),
            cartTotal: CartStore.getCartTotal()
        });

    }

    clearSearch(){

        this.setState({query :''});

    }

    toggleCart(ev){
        ev.preventDefault();
        CartActions.toggleCart();
    }

    searchInput(ev){
        this.setState({query : ev.target.value});
        CartActions.searchProduct(ev.target.value);
    }


    render(){

        return  <div className="search-cart-div">

                    <div className="cart-view-div">
                        <button onClick={this.toggleCart} className="cart-view-btn">
                            <img className="cart-icon" src="/img/shopping-cart.svg"/>
                            {`Cart (${this.state.itemsInCart})`}
                        </button>
                    </div>

                    <div className="cart-search-div">
                        <input onChange={this.searchInput.bind(this)} value={this.state.query} className="cart-search-input" type="text"/>
                        <img src="img/search.svg" className="cart-search-icon"/>
                    </div>

                </div>

    }


}
