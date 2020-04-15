import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchExamples } from '../store/example';

class Example extends Component {
	componentDidMount() {
		this.props.loadExamples();
	}

	render() {
		const exampleState = this.props.exampleState;

		return (
			<div>
				Example HTML
				<ul>
					List of examples:
					{exampleState.map((ex) => {
						return <li key={ex.id}>{ex.name}</li>;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		exampleState: state.examples,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadExamples: () => dispatch(fetchExamples()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
