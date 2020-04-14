import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import { fetchExamples } from '../store/example';
import Example from './Example';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route exact path="/example" component={Example} />
			</Router>
		);
	}
}

export default Main;
