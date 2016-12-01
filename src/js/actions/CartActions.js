import dispatcher from "../dispatcher";



export function removeFromCart(sku){

    dispatcher.dispatch({type:"REMOVE_FROM_CART", sku:sku})

}

export function toggleCart(){

    dispatcher.dispatch({type:"TOGGLE_CART"})

}

export function hideCart(){

    dispatcher.dispatch({type:"HIDE_CART"})

}

export function searchProduct(text){

    dispatcher.dispatch({type:"SEARCH_PRODUCT", text : text})

}

export function emptyCart(){

    dispatcher.dispatch({type:"EMPTY_CART"})

}



