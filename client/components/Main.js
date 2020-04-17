import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Example from './Example';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Navbar} />
				<h2>Welcome to my Boilerplate site!</h2>
				<Route exact path="/example" component={Example} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
			</Router>
		);
	}
}

export default Main;
