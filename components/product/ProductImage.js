/*
 * Module dependencies
 */

import React from 'react';


export default class ProductImage extends React.Component {

    render() {
        if(this.props.product.imageUrl){
            let imageUrl = this.props.product.imageUrl;
            return <section>
                <img className="product-img" src={imageUrl} alt="No Image"/>
            </section>
        }
        else{
            return <section>
                <img className="product-img" src="../../public/img/noImageAvailable.png" alt="No Image"/>
            </section>
        }
    }


}
