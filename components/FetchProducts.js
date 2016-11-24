/*
 * Module dependencies
 */

import React from 'react';
import FetchData from './FetchData'


export default class FetchProducts extends React.Component {


    render(){
        let url =  '../products.json';
        return <FetchData url = {url} />
    }




}