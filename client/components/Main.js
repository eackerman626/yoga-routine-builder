import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchExamples } from '../store/example';
import Example from './Example';
import Login from './Login';
import Signup from './Signup';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route exact path="/example" component={Example} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
			</Router>
		);
	}
}

export default Main;
