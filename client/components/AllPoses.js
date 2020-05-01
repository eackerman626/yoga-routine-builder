import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

import { fetchPoses } from '../store/poses';
import SinglePose from './SinglePose';

class AllPoses extends Component {
	componentDidMount() {
		this.props.loadPoses();
	}

	render() {
		const poses = this.props.poses;

		return (
			<div className="all_poses">
				<div className="sider">Categories:</div>
				<div className="all_poses_content">
					{poses.map((pose) => {
						return <SinglePose key={pose.id} pose={pose} />;
					})}
				</div>
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
