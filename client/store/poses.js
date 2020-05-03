import axios from 'axios';

// ACTION TYPE
const SET_ALL_POSES = 'SET_ALL_POSES';

// ACTION CREATOR
const setAllPoses = (allPoses) => ({
	type: SET_ALL_POSES,
	allPoses,
});

// THUNK CREATOR
export const fetchAllPoses = () => {
	return async (dispatch) => {
		try {
			const results = await axios.get('/api/poses');
			const poses = results.data;
			dispatch(setAllPoses(poses));
		} catch (err) {
			console.log(err);
		}
	};
};

const INITIAL_STATE = [];

function poseReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_ALL_POSES:
			return action.allPoses;
		default:
			return state;
	}
}

export default poseReducer;
