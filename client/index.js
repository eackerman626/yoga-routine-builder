import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

// If using Redux:
import { Provider } from 'react-redux';
import store from './store';

// styling
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>, // <-- Provider tag is for Redux
	document.getElementById('app') // make sure this is the same as the id of the div in index.html
);
