import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMe } from '../store/me';

class Signup extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const signup = {
			name: event.target.name.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};
		try {
			await axios.post('/auth/signup', signup);
			this.props.loadMe();
			this.props.history.push('/');
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div>
				Sign up:
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name"> Name: </label>
					<input name="name" />
					<label htmlFor="email">Email: </label>
					<input name="email" />
					<label htmlFor="password">Password: </label>
					<input name="password" type="password" />
					<button type="submit">Sign Me Up!</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadMe: () => dispatch(fetchMe()),
	};
};

export default connect(null, mapDispatchToProps)(Signup);
