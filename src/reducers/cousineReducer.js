import {
	COUSINE_FETCH,
	COUSINE_FETCHED
} from '../actions/cousineActions';

const INITIAL_STATE = {
	cousines: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case COUSINE_FETCH:
			return {
				...state,
				cousines: []
			};
		case COUSINE_FETCHED:
			return {
				...state,
				cousines: action.cousines
			};
		default:
			return state;
	}
};