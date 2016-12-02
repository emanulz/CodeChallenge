import dispatcher from "../dispatcher";
import * as ProductsAPI from "../util/ProductsAPI"

export function loadProducts() {

    dispatcher.dispatch({type: "FETCH_PRODUCTS"});


    if (localStorage.products){
        dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: JSON.parse(localStorage.products)});
    }

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

export function addToCart(product, qty){

    dispatcher.dispatch({type:"ADD_TO_CART", product:product, qty})

}

export function clearSearch(){

    dispatcher.dispatch({type:"CLEAR_SEARCH"})

}


