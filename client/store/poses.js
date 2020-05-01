import axios from 'axios';

// ACTION TYPE
const SET_POSES = 'SET_POSES';

// ACTION CREATOR
const setPoses = (poses) => ({
	type: SET_POSES,
	poses,
});

// THUNK CREATOR
export const fetchPoses = () => {
	return async (dispatch) => {
		try {
			const results = await axios.get('/api/poses');
			const poses = results.data;
			dispatch(setPoses(poses));
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
