import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchExamples } from '../store/example';

class Example extends Component {
	componentDidMount() {
		try {
			this.props.loadExamples();
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		const exampleState = this.props.exampleState;

		return <div>Example HTML</div>;
	}
}

const mapStateToProps = (state) => {
	console.log('Inside mapStateToProps, state: ', state);
	return {
		exampleState: state.example,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadExamples: dispatch(fetchExamples()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
