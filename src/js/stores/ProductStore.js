/*
 * Module dependencies
 */
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {

    constructor() {
        super();
        //stores current products and all products
        this.products = [];
        this.allProducts = [];
    }

    //Get products
    getProducts() {
        return this.products;
    }

    //Filter product by name
    filterProduct(text) {

        const products = this.allProducts;
        let newProducts = [];

        if(text !== ''){

            for(let i = 0; i < products.length; i++) {
                let product = products[i].name.toLowerCase();
                if (product.indexOf(text.toLowerCase()) !== -1) {
                    newProducts.push(products[i]);
                }
            }
        this.products = newProducts;
        }

        else{
            this.products = this.allProducts;
        }


        this.emit("change");
    }

    //Handel actions triggered by dispatcher
    handleActions(action) {

        switch(action.type) {

            case "RECEIVE_PRODUCTS": {
                this.products = action.products;
                this.allProducts = action.products;
                this.emit("change");
                break;
            }
            case "SEARCH_PRODUCT": {
                this.filterProduct(action.text);
                break;
            }
            case "CLEAR_SEARCH": {
                this.emit("clear");
                break;
            }
        }
    }

}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore));

export default productStore;
