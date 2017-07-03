import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'aframe'
import io from 'socket.io-client';

let socket = io.connect('http://192.168.1.9:8080')

export default class Controller extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			positionX: 0,
			positionY: 0,
			positionZ: 0
		}
	}


	componentDidMount(){
		window.ondevicemotion = (event) => {
			var accelerationX = event.accelerationIncludingGravity.x;
			var accelerationY = event.accelerationIncludingGravity.y;
			var accelerationZ = event.accelerationIncludingGravity.z;
			//console.log("accelerationX", accelerationX + "  " + "accelerationY", accelerationY + "  " + "accelerationZ", accelerationX + "  ")
			this.setState({
				positionX: accelerationX,
				positionY: accelerationY,
				positionZ: accelerationZ
			});

			socket.emit('gamepad', {xaxis: accelerationX, yaxis: accelerationY, axis: accelerationZ});
		}
	}

	render(){
		//console.log("controller", this.state.positionX);
		return (
			<div>
			
				<h3>Gamepad UI</h3>
				<h3>X Position:       {this.state.positionX}</h3>
				<h3>Y Position:       {this.state.positionY}</h3>
				<h3>Z Position:       {this.state.positionZ}</h3>
			</div>
		);
	}
}