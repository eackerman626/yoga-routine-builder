import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMe } from '../store/me';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const login = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		try {
			await axios.put('/auth/login', login);
			this.props.loadMe();
			this.props.history.push('/');
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div>
				Login:
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email: </label>
					<input name="email" />
					<label htmlFor="password">Password: </label>
					<input name="password" type="password" />
					<button type="submit">Log In</button>
				</form>
				<form method="get" action="/auth/google">
					<button type="submit" className="btn bg-red white p1 rounded">
						Login with Google
					</button>
				</form>
				<div>
					New to this site? <Link to="/signup">Create an account</Link>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadMe: () => dispatch(fetchMe()),
	};
};

export default connect(null, mapDispatchToProps)(Login);
