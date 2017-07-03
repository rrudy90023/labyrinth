import React, { Component } from 'react';

export default class Intro extends Component {
	render() {
		return (
			<div style={{'margin': '0 auto', 'fontSize':'20px', 'fontFamily':'helvetica', 'width': '70%', 'position': 'relative', 'textAlign': 'center'}}>
				<h2>Go to:</h2>
				<div>
				<a href="http://labyrinth3d.herokuapp.com/#/floor" >http://labyrinth3d.herokuapp.com/#/floor</a>
				</div>
				<h2>on your desktop browser to view the labyrinth</h2>
				<div></div>
				<br>
				</br>
				<br>
				</br>
				<h2>Go to:</h2>
				<div>
				<a href="http://labyrinth3d.herokuapp.com/#/controller" >http://labyrinth3d.herokuapp.com/#/controller</a>
				</div>
				<h2>on your mobile browser to use phone as a controller</h2>
			</div>
		);
	}
}
