/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './components/layout/Layout'
import CartFull from './components/cart/CartFull'
import Products from './components/layout/Products'
import Login from './components/login/Login'
import LoginForm from './components/login/LoginForm'


ReactDOM.render(

    <Router history={hashHistory} >

        <Route path="/" component={Layout}>
            <IndexRoute component={Products}>
            </IndexRoute>
            <Route path={"/cart"} component={CartFull}>
            </Route>
        </Route>

        <Route path="/login" component={Login}>
            <IndexRoute component={LoginForm}>
            </IndexRoute>
        </Route>

    </Router>,

    document.getElementById('app-container')
);
