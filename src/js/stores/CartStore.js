import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CartStore extends EventEmitter {

    constructor() {
        super();
        this.products = [];
        this.itemsInCart = 0;
        this.cartTotal = 0;
        this.cartVisible = false;
        this.allProducts = [];
    }

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

    addProduct(product, qty) {

        let isOnProducts = false;

        const products = this.products;

        for(let i = 0; i < products.length; i++) {
            if (products[i][0].sku == product.sku) {
                isOnProducts = true;
                break;
            }
        }

        if (isOnProducts){
            this.products[i][1]=this.products[i][1]+qty;
        }

        else{
            this.products.push([product, qty]);
            this.itemsInCart = this.itemsInCart+1;
        }

        this.setCartTotal();
        this.emit("change");
    }

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

    toggleCart(){

        this.cartVisible = !this.cartVisible;
        this.emit("change");
    }

    hideCart(){

        this.cartVisible = false;
        this.emit("change");
    }

    setCartTotal(){

        const products = this.products;
        let total = 0;

        for(let i = 0; i < products.length; i++) {

            total = total+(products[i][0].price * products[i][1])

        }

        this.cartTotal = total;
    }

    emptyCart(){

        this.products = [];
        this.itemsInCart = 0;
        this.cartTotal = 0;
        this.cartVisible = false;

        this.emit("change");

    }

    loadApiProducts(cart){



    }

    loadProducts(products){

        this.allProducts = products;
        console.log(this.allProducts);

    }

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
            case "LOGIN": {
                this.loadApiProducts(action.user.cart);
                break;
            }

        }
    }
}

const cartStore = new CartStore;
dispatcher.register(cartStore.handleActions.bind(cartStore));


export default cartStore;

