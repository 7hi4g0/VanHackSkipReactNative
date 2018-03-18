import Api from '../config/Api';

export function cousinesFetch() {
	return (dispatch, getState) => {
		dispatch({
			type: 'CUISINE_FETCH'
		});

		Api.getCousine()
			.then((res) => {
				dispatch({
					type: 'CUISINE_FETCHED',
					cousines: res.data
				});
			});
	};
}