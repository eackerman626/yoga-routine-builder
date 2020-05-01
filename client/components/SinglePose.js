import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';

const SinglePose = (props) => {
	const pose = props.pose;
	const inRoutine = props.inRoutine;
	return (
		<Content className="single_pose_container">
			<div className="single_pose_header">
				<div className="single_pose_name">
					{pose.name} {pose.direction ? <p>({pose.direction})</p> : null}
				</div>
				{!inRoutine ? <PlusButton poseId={pose.id} /> : <MinusButton poseId={pose.id} />}
			</div>
			<div className="single_pose_content">
				<img src="/images/treePose.png" className="single_pose_img" />
			</div>
		</Content>
	);
};

export default SinglePose;
