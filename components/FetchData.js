/*
 * Module dependencies
 */

import React from 'react';
import $ from 'jquery'
import Product from './product/Product'

export default class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    loadData(){

        $.ajax({
            url:this.props.url,
            dataType: 'json',
            success:(data)=>{
                this.setState({data});
            }
        })

    }

    componentDidMount(){
        this.loadData()

    }

    render(){

        if (this.state.data.products) {
            return (
                <div>
                    {

                    this.state.data.products.map((product) => {

                        return <Product key={product.sku}  product={product}/>

                    })

                    }
                </div>
            )
        }
        else {
            return <p>Cargando...</p>
        }
    }


}
