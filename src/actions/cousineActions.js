import Api from '../config/Api';

export const COUSINE_FETCH = 'COUSINE_FETCH';
export const COUSINE_FETCHED = 'COUSINE_FETCHED';
export const COUSINE_STORE_FETCH = 'COUSINE_STORE_FETCH';
export const COUSINE_STORE_FETCHED = 'COUSINE_STORE_FETCHED';

export function cousinesFetch() {
	return (dispatch, getState) => {
		dispatch({
			type: COUSINE_FETCH
		});

		Api.getCousine()
			.then((res) => {
				dispatch({
					type: COUSINE_FETCHED,
					cousines: res.data
				});
			});
	};
}

export function cousineStoresFetch(cousineId) {
	return (dispatch, getState) => {
		dispatch({
			type: COUSINE_STORE_FETCH
		});

		Api.getCousineStores(cousineId)
			.then((res) => {
				dispatch({
					type: COUSINE_STORE_FETCHED,
					stores: res.data
				});
			});
	};
}