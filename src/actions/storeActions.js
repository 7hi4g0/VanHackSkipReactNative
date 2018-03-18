import Api from '../config/Api';

export const STORE_FETCH = 'STORE_FETCH';
export const STORE_FETCHED = 'STORE_FETCHED';

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