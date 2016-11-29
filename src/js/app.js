/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import jQuery from 'jquery';
import Layout from './components/layout/Layout'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import CartFull from './components/cart/CartFull'
import Products from './components/layout/Products'

window.$ = $;
window.jQuery = jQuery;


ReactDOM.render(

    <Router history={hashHistory} >

        <Route path="/" component={Layout}>
            <IndexRoute component={Products}>
            </IndexRoute>
            <Route path={"/cart"} component={CartFull}>
            </Route>
        </Route>

    </Router>,

    document.getElementById('app-container')
);
