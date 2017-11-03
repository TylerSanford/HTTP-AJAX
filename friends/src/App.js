import React from 'react';

import './App.css';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';

function App() {
	return (
		<div className="app">
			<FriendForm />
			<FriendList />
		</div>
	);
}

export default App;
