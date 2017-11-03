import { GET_FRIENDS, ADD_FRIEND } from '../actions/index';

function friendsReducer(state = [], action) {
	// console.log('friendsReducer.action', action);
	switch (action.type) {
		case GET_FRIENDS:
			return action.payload.data;
		// return [
		// 	{
		// 		name: 'Luis Hernandez',
		// 		age: 47,
		// 		email: 'luis@lambdaschool.com',
		// 	},
		// 	{
		// 		name: 'Luke Skywalker',
		// 		age: 28,
		// 		email: 'luke@rebellion.com',
		// 	},
		// 	{
		// 		name: 'Han Solo',
		// 		age: 35,
		// 		email: 'han@smugglers.com',
		// 	},
		// ];
        case ADD_FRIEND:
            console.log('on Reducer', action.payload);
			return action.payload.data;
		default:
			return state;
	}
}

export default friendsReducer;
