import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import PropTypes from 'prop-types';
import Controller from './Controller'
import Floor from './Floor'
import Shell from './Shell'

ReactDOM.render(
	<Router>

			<Route path="/floor" component={Shell}/>
			<Route path="/controller" component={Shell}/>

	</Router>,
	document.getElementById('root')
)

