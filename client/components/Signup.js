import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {}

	async handleSubmit(event) {
		event.preventDefault();
		const signup = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		await axios.post('/auth/signup', signup);
	}

	render() {
		return (
			<div>
				Sign up:
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email: </label>
					<input name="email" />
					<label htmlFor="password">Password: </label>
					<input name="password" />
					<button type="submit">Sign Me Up!</button>
				</form>
			</div>
		);
	}
}

export default Signup;
