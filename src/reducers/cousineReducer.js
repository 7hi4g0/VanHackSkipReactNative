const INITIAL_STATE = {
	cousines: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CUISINE_FETCH':
			return {
				...state,
				cousines: []
			};
		case 'CUISINE_FETCHED':
			return {
				...state,
				cousines: action.cousines
			};
		default:
			return state;
	}
};