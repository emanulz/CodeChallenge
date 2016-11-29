import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {

    constructor() {
        super();
        this.products = [];
        this.allProducts = [];
    }

    getAll() {
        return this.products;
    }

    filterProduct(text) {

        const products = this.allProducts;
        let newProducts = [];

        if(text !== ''){

            for(var i = 0; i < products.length; i++) {
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
