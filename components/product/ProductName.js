/*
 * Module dependencies
 */

import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';


export default class ProductName extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isShowingModal: false };
    }

    handleClick (ev){
        ev.preventDefault();
        this.setState({isShowingModal: true});
    }
    handleClose () {
        this.setState({isShowingModal: false});
    }

    // onUserClick(ev){
    //     ev.preventDefault();
    //     console.log(`clicked on ${this.props.product.name}`);
    // }

    render() {
        if(this.props.product.name){
            return <a onClick={this.handleClick.bind(this)} className="product-name" href=""> {this.props.product.name}

                {
                    this.state.isShowingModal &&
                    <ModalContainer  onClose={this.handleClose.bind(this)}>
                        <ModalDialog onClose={this.handleClose.bind(this)}>
                            <h1>{this.props.product.name}</h1>
                            <p>More Content. Anything goes here</p>
                        </ModalDialog>
                    </ModalContainer>
                }

            </a>

        }
        else{
            return  <section>
                        <a className="product-name" href=""> No Name Registered</a>
                    </section>
        }
    }


}

