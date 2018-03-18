import Api from '../config/Api';

export const PRODUCT_FETCH = 'PRODUCT_FETCH';
export const PRODUCT_FETCHED = 'PRODUCT_FETCHED';

export function productsFetch() {
	return (dispatch, getState) => {
		dispatch({
			type: PRODUCT_FETCH
		});

		Api.getProduct()
			.then((res) => {
				dispatch({
					type: PRODUCT_FETCHED,
					products: res.data
				});
			});
	};
}