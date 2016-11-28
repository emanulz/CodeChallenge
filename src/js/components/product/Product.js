/*
 * Module dependencies
 */

import React from 'react';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import * as ProductActions from "../../actions/ProductActions";
import ProductData from './ProductData';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import DynamicNumber from 'react-dynamic-number';


export default class Product extends React.Component {


    constructor(props) {
        super(props);
        this.state = {showModal: false, qty : 1};
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);

    }

    close() {
        this.setState({showModal: false});
    }


    open() {

        this.setState({showModal: true});
    }

    addItemToCart(ev) {
        ev.preventDefault();
        this.close();
        ProductActions.addToCart(this.props.product, parseFloat(this.state.qty));
        this.setState({qty: 1});

    }

    handleKeyPress(ev) {

        if(ev.charCode==13){
            this.addItemToCart(ev);
        }

    }

    setQty(ev,modelValue, viewValue ) {

        this.setState({qty: viewValue});

    }

    render() {
        return <div className="product-container col-md-6 col-lg-4 col-xl-3">
            <div className="product">

                <ProductImage product={this.props.product } callBack={ this.open }/>

                <ProductName product={this.props.product} callBack={ this.open }/>

                <section>
                    {this.props.product.brand}
                </section>

                <section>
                    {this.props.product.model}
                </section>

                <section>
                    {`$ ${this.props.product.price}`}
                </section>


                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.product.name}</Modal.Title>
                    </Modal.Header>
                    <Col xs={12}>
                        <Modal.Body>

                            <Col xs={4}>
                                <img className="product-img" src="/img/noImageAvailable.png" alt="No Image"/>
                            </Col>

                            <Col xs={8} className='modal-container'>
                                <section>
                                    { `Brand: ${this.props.product.brand}`}
                                </section>

                                <section>
                                    { `Model: ${this.props.product.model}`}
                                </section>

                                <section>
                                    {this.props.product.desc}
                                </section>

                                <section>
                                    {`$ ${this.props.product.price}`}
                                </section>

                                <section>
                                    <DynamicNumber separator={'.'} integer={5} fraction={0}
                                                   onKeyPress={this.handleKeyPress.bind(this)}
                                                   onChange={this.setQty.bind(this)}
                                                   value={this.state.qty}
                                                   className="qty-input"/>

                                    <input type="button" onClick={this.addItemToCart} className="btn btn-success"
                                           value={'Add To Cart'}/>
                                </section>
                            </Col>

                        </Modal.Body>
                    </Col>

                    <Modal.Footer>

                    </Modal.Footer>

                </Modal>

            </div>
        </div>
    }
}


