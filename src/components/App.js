import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types';
import Controller from './Controller'
import Floor from './Floor'
import Shell from './Shell'
import Intro from './Intro'

const App = (props) => {

return (
	<div>
		<Router >

			<div>
		      <Switch>
		      	  <Route exact path="/" component={Shell}/>
			      <Route exact path="/floor" component={Shell}/>
			      <Route exact path="/controller" component={Shell}/>
			      <Route exact path="/intro" component={Shell}/>
		      </Switch>
		    </div>

		</Router>
	</div>
	)

}

export default App