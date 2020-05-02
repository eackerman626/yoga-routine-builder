import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';

import { fetchPoses } from '../store/poses';
import SinglePose from './SinglePose';

class AllPoses extends Component {
	constructor(props) {
		super();
		this.state = {
			poses: props.poses,
		};
	}

	async componentDidMount() {
		await this.props.loadPoses();
		this.setState({ poses: this.props.poses });
	}

	render() {
		const poses = this.props.poses;

		return (
			<div className="all_poses">
				<div className="sider">Categories:</div>
				<ReactSortable
					group={{ name: 'poses', pull: 'clone', put: 'false' }}
					animation="150"
					className="all_poses_content"
					list={this.state.poses}
					setList={(newState) => this.setState({ poses: newState })}
					sort={false}
				>
					{this.state.poses.map((pose) => (
						<SinglePose key={pose.id} pose={pose} />
					))}
				</ReactSortable>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		poses: state.poses,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadPoses: () => dispatch(fetchPoses()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPoses);
