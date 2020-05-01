import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import { fetchMe } from '../store/me';

class Navbar extends Component {
	constructor() {
		super();
		this.handleLogout = this.handleLogout.bind(this);
		this.handleLogInClick = this.handleLogInClick.bind(this);
	}

	componentDidMount() {
		this.props.loadMe();
	}

	async handleLogout(event) {
		event.preventDefault();
		await axios.delete('/auth/logout');
		this.props.loadMe();
		this.props.history.push('/');
	}

	handleLogInClick() {
		this.props.history.push('/login');
	}

	render() {
		const me = this.props.me;

		return (
			<div>
				{me.name ? (
					<div className="navbar">
						<p>Hello, {me.name}</p>
						<Button type="button" className="logout_btn" onClick={this.handleLogout}>
							Log Out
						</Button>
					</div>
				) : (
					<div className="navbar">
						<Button type="button" className="login_btn" onClick={this.handleLogInClick}>
							Log in
						</Button>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		me: state.me
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadMe: () => dispatch(fetchMe())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
