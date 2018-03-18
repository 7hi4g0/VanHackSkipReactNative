import { combineReducers } from 'redux';

import loginNavigatorReducer from './loginNavigatorReducer';
import mainNavigatorReducer from './mainNavigatorReducer';
import cousineReducer from './cousineReducer';

export default combineReducers({
	loginNavigator: loginNavigatorReducer,
	mainNavigator: mainNavigatorReducer,
	cousine: cousineReducer
});