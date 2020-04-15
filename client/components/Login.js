import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {}

	async handleSubmit(event) {
		event.preventDefault();
		const login = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		await axios.put('/auth/login', login);
	}

	render() {
		return (
			<div>
				Login:
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email: </label>
					<input name="email" />
					<label htmlFor="password">Password: </label>
					<input name="password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;
