import React, { Component } from 'react';
import { ReactSortable } from 'react-sortablejs';
import SinglePose from './SinglePose';
import { createId } from '../utils';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

class Routine extends Component {
	constructor() {
		super();
		this.state = {
			name: 'New Routine',
			poses: [],
			prevState: { poses: [] },
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleUndo = this.handleUndo.bind(this);
	}

	handleNameChange(evt) {
		this.setState({ name: evt.target.value });
	}

	handleSave() {
		console.log('you clicked save!');
		console.log('these are the poses you are savig: ');
		console.log(this.state.poses.map((el) => el.id));
	}

	handleClear() {
		this.setState({ poses: [], prevState: this.state });
	}

	handleUndo() {
		this.setState({ ...this.state.prevState });
	}

	handleDelete() {}

	render() {
		return (
			<div className="routine_container">
				<div className="routine_header">
					<div className="routine_name_form">
						<Form layout="inline" colon={true}>
							<Form.Item label="Title">
								<Input className="name_input" value={this.state.name} onChange={this.handleNameChange} />
							</Form.Item>
						</Form>
					</div>
					<div className="routine_buttons">
						<Button className="routine_button" onClick={this.handleUndo}>
							Undo
						</Button>
						<Button className="routine_button" onClick={this.handleClear}>
							Clear
						</Button>
						<Button className="routine_button" onClick={this.handleSave}>
							Save
						</Button>
					</div>
				</div>
				<ReactSortable
					className="routine"
					group="poses"
					animation="150"
					clone={(item) => ({ ...item, sortableId: createId() })}
					list={this.state.poses}
					setList={(newPoses) => {
						if (JSON.stringify(newPoses) !== JSON.stringify(this.state.poses)) {
							this.setState({ prevState: this.state });
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
