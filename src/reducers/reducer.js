import { combineReducers } from 'redux';

import loginNavigatorReducer from './loginNavigatorReducer';
import productNavigatorReducer from './productNavigatorReducer';
import cousineReducer from './cousineReducer';
import customerReducer from './customerReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import mainNavigatorReducer from './mainNavigatorReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import storeNavigatorReducer from './storeNavigatorReducer';
import cousineNavigatorReducer from './cousineNavigatorReducer';

export default combineReducers({
	loginNavigator: loginNavigatorReducer,
	mainNavigator: mainNavigatorReducer,
	productNavigator: productNavigatorReducer,
	storeNavigator: storeNavigatorReducer,
	cousineNavigator: cousineNavigatorReducer,
	cousine: cousineReducer,
	customer: customerReducer,
	store: storeReducer,
	product: productReducer,
	cart: cartReducer,
	order: orderReducer
});