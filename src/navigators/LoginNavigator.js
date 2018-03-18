import React from 'react';
import { TabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NewCustomerScreen from '../screens/NewCustomer/NewCustomerScreen';

const LoginNavigator = TabNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			title: 'Login'
		}
	},
	NewCustomer: {
		screen: NewCustomerScreen,
		navigationOptions: {
			title: 'NewCustomer'
		}
	}
}, {
	initialRouteName: 'Login',
});

export default LoginNavigator;