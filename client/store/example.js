import axios from 'axios';

// ACTION TYPE
const SET_EXAMPLES = 'SET_EXAMPLES';

// ACTION CREATOR
const setExamples = (examplePayload) => ({
	type: SET_EXAMPLES,
	examplePayload,
});

// THUNK CREATOR
export const fetchExamples = () => {
	return async (dispatch) => {
		try {
			// normally, some sort of axios request, e.g.:
			const results = await axios.get('/api/exampleRoute');
			const examples = results.data;

			// for testing, set examples to be an object
			// const examples = [
			// 	{ id: 1, name: 'example1' },
			// 	{ id: 2, name: 'example2' },
			// 	{ id: 3, name: 'example3' },
			// ];

			dispatch(setExamples(examples));
		} catch (err) {
			console.log(err);
		}
	};
};

// change initial state to be correct data type
const INITIAL_STATE = [];

function exampleReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_EXAMPLES:
			return action.examplePayload;
		default:
			return state;
	}
}

export default exampleReducer;
