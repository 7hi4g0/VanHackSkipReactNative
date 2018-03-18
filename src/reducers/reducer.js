import { combineReducers } from 'redux';

import loginNavigatorReducer from './loginNavigatorReducer';
import productNavigatorReducer from './productNavigatorReducer';
import cousineReducer from './cousineReducer';
import customerReducer from './customerReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import mainNavigatorReducer from './mainNavigatorReducer';

export default combineReducers({
	loginNavigator: loginNavigatorReducer,
	mainNavigator: mainNavigatorReducer,
	productNavigator: productNavigatorReducer,
	cousine: cousineReducer,
	customer: customerReducer,
	store: storeReducer,
	product: productReducer
});