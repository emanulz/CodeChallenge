
import React from 'react';

export default class CartFullItemItem extends React.Component {


    handleClick(ev){
        ev.preventDefault();
        this.props.removeItem(this.props.product.sku);
    }

    render() {

        let price = (this.props.qty*this.props.product.price).toFixed(2);

        return  <tr>
                    <td>{this.props.product.name}  </td>
                    <td>{this.props.qty}</td>
                    <td>${price}</td>
                    <td><button onClick={this.handleClick.bind(this)} className=" btn btn-danger">Remove</button></td>
                </tr>


    }

}

