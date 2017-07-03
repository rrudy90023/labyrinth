import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router-dom'
import Floor from './Floor'
import Controller from './Controller'
import io from 'socket.io-client';
import Intro from './Intro'

export default class Shell extends Component {


	render() {
		return (
			<div >
				{(this.props.location.hash === "#/intro") ?
				<Intro /> :
				(this.props.location.hash === "#/floor") ?
				<Floor /> :
				(this.props.location.hash === "#/controller") ?
				<Controller /> :
				null
				}
			</div>
		);
	}
}


//<div style={{"position": "absolute", "width":"100%", "height":"100%"}}>