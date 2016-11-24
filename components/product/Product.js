/*
 * Module dependencies
 */

import React from 'react';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductData from './ProductData';


export default class Product extends React.Component {

    render() {
        return <div className="product-container col-sm-4 col-lg-3">
                    <div className="product">

                        <ProductImage product = {this.props.product} />

                        <ProductName product = {this.props.product} />

                        <section>
                            {this.props.product.brand}
                        </section>

                        <section>
                            {this.props.product.model}
                        </section>

                        <section>
                            {`$ ${this.props.product.price}`}
                        </section>
                        <section>
                            <input className="btn btn-success" type="button" value={'Add To Cart'}/>
                        </section>

                    </div>
               </div>
    }


}
