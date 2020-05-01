import React, { Component } from 'react';
import { ReactSortable } from 'react-sortablejs';
import SinglePose from './SinglePose';

const poses = [
	{
		id: 1,
		name: 'Downward Facing Dog',
		category: 'Standing',
		imageUrl: '/images/treePose.png',
	},
	{
		id: 2,
		name: 'Tree',
		category: 'Standing',
		direction: 'Left',
		imageUrl: '/images/treePose.png',
	},
	{
		id: 3,
		name: 'Corpse Pose',
		category: 'Supine',
		imageUrl: '/images/treePose.png',
	},
	{
		id: 4,
		name: 'Half Pigeon',
		category: 'Sitting',
		direction: 'Right',
		imageUrl: '/images/treePose.png',
	},
	{
		id: 5,
		name: 'Half Pigeon',
		category: 'Sitting',
		direction: 'Left',
		imageUrl: '/images/treePose.png',
	},
];

class Routine extends Component {
	constructor() {
		super();
		this.state = {
			poses: poses,
		};
	}

	render() {
		return (
			<ReactSortable className="routine" list={this.state.poses} setList={(newState) => this.setState({ poses: newState })}>
				{this.state.poses.map((pose) => (
					<SinglePose key={pose.id} pose={pose} inRoutine={true} />
				))}
			</ReactSortable>
		);
	}
}

export default Routine;
