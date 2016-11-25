import dispatcher from "../dispatcher";
import $ from 'jquery'


export function loadProducts() {

    dispatcher.dispatch({type: "FETCH_PRODUCTS"});

    $.ajax({
        url:'products.json',
        dataType: 'json',
        success:(data)=>{
            dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: data.products });
        }
    });

}
