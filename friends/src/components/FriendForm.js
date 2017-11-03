import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions/index';

class FriendForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.getDefaultState();

		this.handleInputChange = this.handleInputChange.bind(this);
		this.saveFriend = this.saveFriend.bind(this);
	}

	render() {
		return (
			<form onSubmit={this.saveFriend} className="friend friend-form" noValidate>
				<h2 className="friend-list__title">Add Friend</h2>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleInputChange}
				/>

				<label htmlFor="age">Age</label>
				<input
					type="number"
					name="age"
					value={this.state.age}
					onChange={this.handleInputChange}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleInputChange}
				/>

				<div className="friend-form__actions">
					<button className="cancel-button">Cancel</button>
					<button className="save-button">Save</button>
				</div>
			</form>
		);
	}

	handleInputChange(event) {
        console.log(event.target.name);
        
		this.setState({ [ event.target.name ]: event.target.value });
	}

	saveFriend(event) {
		event.preventDefault();
		console.log(this.state);
        
        this.props.addFriend(this.state);
        
		this.setState(this.getDefaultState());
	}

	getDefaultState() {
		return {
			name: '',
			age: '',
			email: '',
		};
	}
}

export default connect(null, { addFriend })(FriendForm);
