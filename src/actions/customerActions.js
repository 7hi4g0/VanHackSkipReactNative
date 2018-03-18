import Api from "../config/Api";

export const CUSTOMER_AUTH = 'CUSTOMER_AUTH';
export const CUSTOMER_AUTHED = 'CUSTOMER_AUTHED';
export const CUSTOMER_AUTH_ERROR = 'CUSTOMER_AUTH_ERROR';
export const CUSTOMER_CREATE = 'CUSTOMER_CREATE';
export const CUSTOMER_CREATED = 'CUSTOMER_CREATED';
export const CUSTOMER_CREATE_ERROR = 'CUSTOMER_CREATE_ERROR';

export function customerAuth(login) {
	return (dispatch, getState) => {
		dispatch({
			type: CUSTOMER_AUTH
		});

		Api.postCustomerAuth(login)
			.then((res) => {
				dispatch({
					type: CUSTOMER_AUTHED,
					jwt: res.data
				});
			}, (err) => {
				dispatch({
					type: CUSTOMER_AUTH_ERROR,
					err: err.response.data.error
				});
			});
	}
}

export function customerCreate(customer) {
	return (dispatch, getState) => {
		dispatch({
			type: CUSTOMER_CREATE
		});

		Api.postCustomer(customer)
			.then((res) => {
				dispatch({
					type: CUSTOMER_CREATED,
					jwt: res.data
				});
			}, (err) => {
				dispatch({
					type: CUSTOMER_CREATE_ERROR,
					err: err.response.data.error
				});
			});
	}
}