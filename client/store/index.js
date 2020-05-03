import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import other reducers to be combined
import poseReducer from './poses';
import meReducer from './me';

const reducer = combineReducers({
	// list out all imported reducers
	allPoses: poseReducer,
	me: meReducer,
});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));
const store = createStore(reducer, middleware);

export default store;
