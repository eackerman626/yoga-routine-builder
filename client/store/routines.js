import axios from 'axios';

// ACTION TYPE
const SET_SELECTED_ROUTINE = 'SET_SELECTED_ROUTINE';
const SET_MY_ROUTINES = 'SET_MY_ROUTINES';

// ACTION CREATOR
const setSelectedRoutine = (selectedRoutine) => ({
	type: SET_SELECTED_ROUTINE,
	selectedRoutine,
});

const setMyRoutines = (myRoutines) => ({
	type: SET_MY_ROUTINES,
	myRoutines,
});

// THUNK CREATOR
export const fetchSelectedRoutine = (selectedRoutine) => {
	return async (dispatch) => {
		try {
			const results = await axios.get(`/api/routines/${selectedRoutine.id}`);
			const selectedRoutine = results.data;
			dispatch(setSelectedRoutine(selectedRoutine));
		} catch (err) {
			console.log(err);
		}
	};
};

const INITIAL_STATE = [];

function poseReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_POSES:
			return action.poses;
		default:
			return state;
	}
}

export default poseReducer;
