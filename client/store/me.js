import axios from 'axios';

// ACTION TYPE
const SET_ME = 'SET_ME';

// ACTION CREATOR
const setMe = (me) => ({
	type: SET_ME,
	me,
});

// THUNK CREATOR
export const fetchMe = () => {
	return async (dispatch) => {
		try {
			// normally, some sort of axios request, e.g.:
			const results = await axios.get('/auth/me');
			const me = results.data;
			dispatch(setMe(me));
		} catch (err) {
			console.log(err);
		}
	};
};

// change initial state to be correct data type
const INITIAL_STATE = {};

function meReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_ME:
			return action.me;
		default:
			return state;
	}
}

export default meReducer;
