import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFriends } from '../actions/index';

class FriendList extends React.Component {
	render() {
		return (
			<div className="friend-list">
				<h2 className="friend-list__title">My Friends</h2>
				{this.renderFriends()}
			</div>
		);
	}

	renderFriends() {
		return this.props.friends.map(friend => {
			return (
				<div key={friend.name} className="friend">
					<div className="friend__name">{friend.name}</div>
					<div className="friend__age">{friend.age}</div>
					<div className="friend__email">{friend.email}</div>
				</div>
			);
		});
	}

	componentDidMount() {
		this.props.getFriends();
	}
}

function mapStateToProps(state) {
	// this state is the application state
	return {
		friends: state.friends, // value returned by friendsReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getFriends: getFriends,
		},
		dispatch
	);
}

// export default connect(mapStateToProps, { getFriends: getFriends })(FriendList);
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
