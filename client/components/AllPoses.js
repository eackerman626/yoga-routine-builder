import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';

import { fetchAllPoses } from '../store/poses';
import SinglePose from './SinglePose';

class AllPoses extends Component {
	constructor() {
		super();
		this.state = {
			allPoses: [],
		};
	}

	async componentDidMount() {
		await this.props.loadAllPoses();
		this.setState({ allPoses: this.props.allPoses });
	}

	render() {
		return (
			<div className="all_poses">
				<div className="sider">Categories:</div>
				<ReactSortable
					group={{ name: 'poses', pull: 'clone', put: 'false' }}
					animation="150"
					className="all_poses_content"
					list={this.state.allPoses}
					setList={(newState) => this.setState({ allPoses: [...newState] })}
					sort={false}
				>
					{this.state.allPoses.map((pose) => (
						<SinglePose key={pose.id} pose={pose} />
					))}
				</ReactSortable>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		allPoses: state.allPoses,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadAllPoses: () => dispatch(fetchAllPoses()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPoses);
