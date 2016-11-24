/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import jQuery from 'jquery';
import FetchProducts from './components/FetchProducts'

window.$ = $;
window.jQuery = jQuery;


ReactDOM.render(
    <FetchProducts/>,
    document.getElementById('app-container')
);
