import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'aframe'
import io from 'socket.io-client';

let socket = io.connect('http://labyrinth3d.herokuapp.com')
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
	}

	componentDidMount(){
		window.ondevicemotion = (event) => {
			var accelerationX = event.accelerationIncludingGravity.x;
			var accelerationY = event.accelerationIncludingGravity.y;
			var accelerationZ = event.accelerationIncludingGravity.z;

			this.setState({
				positionX: accelerationX,
				positionY: accelerationY,
				positionZ: accelerationZ
			});

			socket.emit('gamepad', {xaxis: accelerationX, yaxis: accelerationY, axis: accelerationZ});
		}
	}

	render(){
		//console.log(styles.uiPad)	

		return (
			<div className={classNames(styles.uiPad)}>
				<img style={{'width': '100%', 'height':'100%', 'position':'fixed', 'top':'0', 'left':'0'}} src={ui} />
			</div>
		);	
	}
}