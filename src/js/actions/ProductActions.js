/*
 * Module dependencies
 */
import dispatcher from "../dispatcher";
import * as ProductsAPI from "../util/ProductsAPI"

export function loadProducts() {

    // If products on local storage, use those products to avoid other request to server.
    if (localStorage.products){
        dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: JSON.parse(localStorage.products)});
    }

    // Otherwise gets products from json file, using promises
    else{
        ProductsAPI
            .getProducts('products.json')
            .then(products => {
                localStorage.products = JSON.stringify(products);
                dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: products });
            })
            .catch(message => {
                console.log(message);
            });
    }
}

//Add to cart action
export function addToCart(product, qty){

    dispatcher.dispatch({type:"ADD_TO_CART", product:product, qty})

}

//clear search action
export function clearSearch(){

    dispatcher.dispatch({type:"CLEAR_SEARCH"})

}


