import {
	ORDERS_FETCH,
	ORDERS_FETCHED,
	ORDER_CANCEL,
	ORDER_CANCEL_ERROR
} from '../actions/orderActions';

const INITIAL_STATE = {
	orders: [],
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ORDERS_FETCH:
			return {
				...state,
				orders: []
			};
		case ORDERS_FETCHED:
			return {
				...state,
				orders: action.orders
			};
		// case ORDER_CANCEL:
		// 	return {
		// 		...state,
		// 		error: ''
		// 	};
		// case ORDER_CANCEL_ERROR:
		// 	return {
		// 		...state,
		// 		error: action.err
		// 	};
		default:
			return state;
	}
};