/*
 * Module dependencies
 */

import React from 'react';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductData from './ProductData';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';


export default class Product extends React.Component {


    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

    }

    close() {
        this.setState({ showModal: false });
    }


    open() {

        this.setState({ showModal: true });
    }

    render() {
        return <div className="product-container col-sm-4 col-lg-3">
                    <div className="product">

                        <ProductImage product = {this.props.product } callBack = { this.open } />

                        <ProductName product = {this.props.product} callBack = { this.open } />

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

                                    <Col xs={8} className = 'modal-container'>
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
                                            <input className="btn btn-success" type="button" value={'Add To Cart'}/>
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
