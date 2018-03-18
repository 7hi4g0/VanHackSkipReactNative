import {
	CUSTOMER_AUTH,
	CUSTOMER_AUTHED,
	CUSTOMER_AUTH_ERROR,
	CUSTOMER_CREATE,
	CUSTOMER_CREATED,
	CUSTOMER_CREATE_ERROR
} from '../actions/customerActions';

const INITIAL_STATE = {
	token: '',
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CUSTOMER_AUTH:
		case CUSTOMER_CREATE:
			return INITIAL_STATE;
		case CUSTOMER_AUTHED:
		case CUSTOMER_CREATED:
			return {
				...state,
				token: action.jwt
			};
		case CUSTOMER_AUTH_ERROR:
		case CUSTOMER_CREATE_ERROR:
			return {
				...state,
				error: action.err
			};
		default:
			return state;
	}
}