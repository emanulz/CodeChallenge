/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import jQuery from 'jquery';
import Layout from './components/layout/Layout'

window.$ = $;
window.jQuery = jQuery;


ReactDOM.render(
    <Layout/>,
    document.getElementById('app-container')
);
