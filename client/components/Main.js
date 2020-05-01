import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllPoses from './AllPoses';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Routine from './Routine';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Navbar} />
				<h2>Welcome to my Yoga site!</h2>
				<Route path="/home" component={AllPoses} />
				<Route path="/home" component={Routine} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
			</Router>
		);
	}
}

export default Main;
