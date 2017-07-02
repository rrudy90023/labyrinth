import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router'

import '../assets/stylesheets/base.scss';
import PropTypes from 'prop-types';
import Controller from './Controller'
import Floor from './Floor'
// import Shell from './Shell'

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//   	const { name } = this.props
//     return (
//       <div><h1>Puto, {name}!</h1></div>
//     );
//   }
// }

ReactDOM.render(
	<Router>
		<Route path="/floor" component={Floor}/>
		<Route path="/controller" component={Controller}/>
	</Router>,
	document.getElementById('root')
);