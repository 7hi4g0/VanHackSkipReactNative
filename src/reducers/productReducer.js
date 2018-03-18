import {
	PRODUCT_FETCH,
	PRODUCT_FETCHED
} from '../actions/productActions';

const INITIAL_STATE = {
	products: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PRODUCT_FETCH:
			return {
				...state,
				products: []
			}
		case PRODUCT_FETCHED:
			return {
				...state,
				products: action.products
			}
		default:
			return state;
	}
}