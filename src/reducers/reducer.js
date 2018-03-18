import { combineReducers } from 'redux';

import loginNavigatorReducer from './loginNavigatorReducer';
import mainNavigatorReducer from './mainNavigatorReducer';
import cousineReducer from './cousineReducer';
import customerReducer from './customerReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';

export default combineReducers({
	loginNavigator: loginNavigatorReducer,
	mainNavigator: mainNavigatorReducer,
	cousine: cousineReducer,
	customer: customerReducer,
	store: storeReducer,
	product: productReducer
});