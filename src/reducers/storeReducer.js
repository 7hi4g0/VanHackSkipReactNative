import {
	STORE_FETCH,
	STORE_FETCHED
} from '../actions/storeActions';

const INITIAL_STATE = {
	stores: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case STORE_FETCH:
			return {
				...state,
				stores: []
			}
		case STORE_FETCHED:
			return {
				...state,
				stores: action.stores
			}
		default:
			return state;
	}
}