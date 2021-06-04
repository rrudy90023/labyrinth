import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'aframe'
import io from 'socket.io-client';

let socket = io.connect('http://labyrinth3d.herokuapp.com')
// let socket = io.connect('http://192.168.1.25:8080/')
import styles from '../assets/stylesheets/base.scss'
import classNames  from 'classnames'
import ui from '../assets/images/xy.svg'

export default class Controller extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			positionX: 0,
			positionY: 0,
			positionZ: 0
		}
		this.getAccel = this.getAccel.bind(this);
	}


	getAccel() {
		console.log("hello click");

		DeviceMotionEvent.requestPermission().then(response => {
        	if (response == 'granted') {
	            console.log("accelerometer permission granted");
	            // Do stuff here
	        }
	    });

	}

	// componentDidMount(){
	// 	window.ondevicemotion = (event) => {
	// 		var accelerationX = event.accelerationIncludingGravity.x;
	// 		var accelerationY = event.accelerationIncludingGravity.y;
	// 		var accelerationZ = event.accelerationIncludingGravity.z;

	// 		this.setState({
	// 			positionX: accelerationX,
	// 			positionY: accelerationY,
	// 			positionZ: accelerationZ
	// 		});

	// 		socket.emit('gamepad', {xaxis: accelerationX, yaxis: accelerationY, axis: accelerationZ});
	// 	}
	// }

	render(){
		// console.log(styles.uiPad)	

		return (
			<div>
				
				<div className={classNames(styles.uiPad)}>
					
					<img src={ui} />
				</div>
				<button onClick={this.getAccel}><h1>Get Accelerometer Permissions</h1></button>
			</div>
		);	
	}
}