import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';

export function getFriends() {
	const friendsEndpoint = 'http://localhost:5000/friends';
	const friendsRequest = axios.get(friendsEndpoint);

	// console.log('getFriends Action Creator.request', friendsRequest);

	return {
		type: GET_FRIENDS,
		payload: friendsRequest,
	};
}

export function addFriend(friend) {
	const addFriendEndpoint = 'http://localhost:5000/new-friend';
    const addFriendRequest = axios.post(addFriendEndpoint, friend);
    
    console.log(addFriendRequest);
    
    return {
		type: ADD_FRIEND,
		payload: addFriendRequest,
	};
}

// action creators > Redux-Promise  > reducers