import React, { Component } from 'react';
import { ReactSortable } from 'react-sortablejs';
import SinglePose from './SinglePose';
import { createId } from '../utils';
import { Button } from 'antd';
import axios from 'axios';

class Routine extends Component {
	constructor() {
		super();
		this.state = {
			poses: [],
			prevState: { poses: [] },
		};

		this.handleSave = this.handleSave.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleUndo = this.handleUndo.bind(this);
	}

	handleSave() {
		console.log('you clicked save!');
	}

	handleClear() {
		console.log('you clicked clear!');
		this.setState({ poses: [], prevState: this.state });
	}

	handleUndo() {
		console.log('you clicked undo!');
		this.setState({ ...this.state.prevState });
	}

	render() {
		return (
			<div>
				<div className="routine_header">
					<Button onClick={this.handleSave}>Save</Button>
					<Button onClick={this.handleClear}>Clear</Button>
					<Button onClick={this.handleUndo}>Undo</Button>
				</div>
				<ReactSortable
					className="routine"
					group="poses"
					animation="150"
					clone={(item) => ({ ...item, sortableId: createId() })}
					list={this.state.poses}
					setList={(newPoses) => {
						if (JSON.stringify(newPoses) !== JSON.stringify(this.state.poses)) {
							console.log('CHANGE IS A COMIN: ', this.state.poses, newPoses);
							console.log('state before logged change: ', this.state);
							this.setState({ prevState: this.state });
							console.log('state after logged change: ', this.state);
						}
						this.setState({ poses: newPoses });
					}}
				>
					{this.state.poses.map((pose) => {
						return <SinglePose key={pose.sortableId} pose={pose} inRoutine={true} />;
					})}
				</ReactSortable>
			</div>
		);
	}
}

export default Routine;
