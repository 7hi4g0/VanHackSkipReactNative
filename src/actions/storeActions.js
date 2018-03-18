import Api from '../config/Api';

export const STORE_FETCH = 'STORE_FETCH';
export const STORE_FETCHED = 'STORE_FETCHED';
export const STORE_PRODUCTS_FETCH = 'STORE_PRODUCTS_FETCH';
export const STORE_PRODUCTS_FETCHED = 'STORE_PRODUCTS_FETCHED';

export function storesFetch() {
	return (dispatch, getState) => {
		dispatch({
			type: STORE_FETCH
		});

		Api.getStore()
			.then((res) => {
				dispatch({
					type: STORE_FETCHED,
					stores: res.data
				});
			});
	};
}

export function storeProductsFetch(storeId) {
	return (dispatch, getState) => {
		dispatch({
			type: STORE_PRODUCTS_FETCH
		});

		Api.getStoreProducts(storeId)
			.then((res) => {
				dispatch({
					type: STORE_PRODUCTS_FETCHED,
					products: res.data
				});
			});
	};
}