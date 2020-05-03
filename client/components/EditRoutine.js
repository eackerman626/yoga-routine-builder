import React from 'react';
import { useParams } from 'react-router-dom';
import AllPoses from './AllPoses';
import Routine from './Routine';

const EditRoutine = (props) => {
	return (
		<div>
			<AllPoses />
			<Routine routineId={props.match.params.routineId} />
		</div>
	);
};

export default EditRoutine;
