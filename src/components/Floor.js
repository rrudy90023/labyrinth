import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import 'aframe'
import Modelpath from '../assets/images/board.obj'
import Matpath from '../assets/images/board.mtl'
var physics = require('aframe-physics-system');
physics.registerAll();
import THREE from 'three'
import io from 'socket.io-client';

let socket = io.connect('http://192.168.1.9:8080')


export default class Floor extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			rotation: "0 0 0"
		}
	}

	tiltboard(rot){
		//console.log('tiltboard function... ', rot);
		var xtilt = rot.xaxis;
		var ytilt = rot.yaxis;
		var ztilt = rot.zaxis;


		this.setState({
			rotation: xtilt + " " + 0 + " " + ytilt
		})
	}

	componentDidMount(){
		socket.emit('boardon', {init: "board ready"});

		socket.on('initfloor', data=> {
			this.tiltboard(data);
		})
	}

	render(){

		//console.log(this.state.rotation)


		return (

			<a-scene vr-mode-ui="true" physics="friction: 0.1; restitution: 0.5; gravity:-100">

				
				<a-entity light="type: hemisphere; color: #929292; groundColor: #515151; intensity: 1.8" position="0 20 0"></a-entity>

				<a-sphere dynamic-body="mass:10000" position="-6.29 26 1.03" scale="1 1 1" color="yellow"></a-sphere>

				<a-asset-item id="model" src={Modelpath}></a-asset-item>
				<a-asset-item id="modmlt" src={Matpath}></a-asset-item>
				<a-entity static-body position="0 0 0" rotation={this.state.rotation} scale="0.001 0.001 0.001" obj-model="obj: #model; mtl: #modmlt" color="blue" scale="1 1 1">
				</a-entity>

				

				<a-entity camera position="-0.2 34 28" rotation="-53 0 0" wasd-controls look-controls></a-entity>


				
				<a-sky color="#ffffff"></a-sky>

			</a-scene>
		);

    }
   }
