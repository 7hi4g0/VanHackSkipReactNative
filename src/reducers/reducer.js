import { combineReducers } from 'redux';

import loginNavigatorReducer from './loginNavigatorReducer';

export default combineReducers({
	loginNavigator: loginNavigatorReducer,
});