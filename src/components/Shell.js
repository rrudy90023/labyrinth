import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'
import Floor from './Floor'
import Controller from './Controller'
import io from 'socket.io-client';

export class Shell extends Component {


	render() {
		return (
			<div style={{"position": "absolute", "width":"100%", "height":"100%"}}>
				<Mirror /> :
				(this.props.location.pathname === "/floor") ?
				<Floor /> :
				(this.props.location.pathname === "/controller") ?
				<Controller /> :
				null
				}
			</div>
		);
	}
}
