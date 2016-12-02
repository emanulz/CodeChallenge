/*
 * Module dependencies
 */
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CartStore extends EventEmitter {

    constructor() {
        // Store vars
        super();
        this.products = [];
        this.itemsInCart = 0;
        this.cartTotal = 0;
        this.cartVisible = false;
    }

    // Get functions used by components
    getCartProducts() {
        return this.products;
    }

    getItemsInCart(){
        return this.itemsInCart;
    }

    getCartTotal(){
        return this.cartTotal;
    }

    getCartVisible(){
        return this.cartVisible;
    }

    //Add product to Cart function
    addProduct(product, qty) {


        let isOnProducts = false;

        const products = this.products;

        //check if product is already in cart
        for(let i = 0; i < products.length; i++) {
            if (products[i][0].sku == product.sku) {
                isOnProducts = true;
                break;
            }
        }

        //if its already in cart just add quantity
        if (isOnProducts){
            this.products[i][1]=this.products[i][1]+qty;
        }

        //Otherwise add it to cart
        else{
            this.products.push([product, qty]);
            this.itemsInCart = this.itemsInCart+1;
        }

        this.setCartTotal();
        this.emit("change");
    }

    //Remove from cart based on sku
    removeProduct(sku) {

        let isOnProducts = false;

        const products = this.products;

        let index = 0;

        for(let i = 0; i < products.length; i++) {
            if (products[i][0].sku == sku) {
                isOnProducts = true;
                index = i;
                break;
            }
        }

        if (isOnProducts){
            this.products.splice(index,1);
            this.itemsInCart = this.itemsInCart-1;
            this.setCartTotal();
            this.emit("change");
        }
        else{
            alert('ERROR, No Item In Cart, Please Try Again');
        }

    }

    //Cart functionality functions
    toggleCart(){

        this.cartVisible = !this.cartVisible;
        this.emit("change");
    }

    hideCart(){

        this.cartVisible = false;
        this.emit("change");
    }

    emptyCart(){

        this.products = [];
        this.itemsInCart = 0;
        this.cartTotal = 0;
        this.cartVisible = false;

        this.emit("change");

    }

    //Calculates the total amount based on quantity and price.
    setCartTotal(){

        const products = this.products;
        let total = 0;

        for(let i = 0; i < products.length; i++) {

            total = total+(products[i][0].price * products[i][1])

        }

        this.cartTotal = total;
    }

   //Handel Actions triggered by dispatcher
    handleActions(action) {

        switch(action.type) {

            case "ADD_TO_CART": {
                this.addProduct(action.product, action.qty);
                break;
            }
            case "REMOVE_FROM_CART": {
                this.removeProduct(action.sku);
                break;
            }
            case "CHANGE_QTY": {
                this.removeProduct(action.product.sku);
                break;
            }
            case "TOGGLE_CART": {
                this.toggleCart();
                break;
            }

            case "HIDE_CART": {
                this.hideCart();
                break;
            }

            case "EMPTY_CART": {
                this.emptyCart();
                break;
            }

        }
    }
}

const cartStore = new CartStore;
dispatcher.register(cartStore.handleActions.bind(cartStore));

export default cartStore;

