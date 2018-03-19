import {
	COUSINE_FETCH,
	COUSINE_FETCHED,
	COUSINE_STORE_FETCH,
	COUSINE_STORE_FETCHED
} from '../actions/cousineActions';

const INITIAL_STATE = {
	cousines: [],
	stores: []
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
		case COUSINE_STORE_FETCH:
			return {
				...state,
				stores: []
			};
		case COUSINE_STORE_FETCHED:
			return {
				...state,
				stores: action.stores
			};
		default:
			return state;
	}
};