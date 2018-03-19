import {
	STORE_FETCH,
	STORE_FETCHED,
	STORE_PRODUCTS_FETCH,
	STORE_PRODUCTS_FETCHED
} from '../actions/storeActions';

const INITIAL_STATE = {
	stores: [],
	products: [],
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
		case STORE_PRODUCTS_FETCH:
			return {
				...state,
				products: []
			}
		case STORE_PRODUCTS_FETCHED:
			return {
				...state,
				products: action.products
			}
		default:
			return state;
	}
}