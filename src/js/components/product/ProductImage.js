/*
 * Module dependencies
 */

import React from 'react';


export default class ProductImage extends React.Component {

    onUserClick(ev){
        ev.preventDefault();
        this.props.callBack();

    }

    // Product Image component, link to open modal
    render() {
        if(this.props.product.imageUrl){
            let imageUrl = this.props.product.imageUrl;
            return <section>
                <img onClick={this.onUserClick.bind(this)} className="product-img" src={imageUrl} alt="Product"/>
            </section>
        }
        else{
            return <section>
                <img onClick={this.onUserClick.bind(this)} className="product-img" src="/img/noImageAvailable.png" alt="No Image"/>
            </section>
        }
    }


}
