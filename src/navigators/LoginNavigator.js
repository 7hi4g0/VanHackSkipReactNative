import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
	createReactNavigationReduxMiddleware,
	createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NewCustomerScreen from '../screens/NewCustomerScreen/NewCustomerScreen';
import { MainNavigator } from './MainNavigator';

export const LoginNavigatorContainer = StackNavigator({
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
	},
	MainNav: {
		screen: MainNavigator,
		navigationOptions: {
			title: 'Main Navigation'
		}
	}
}, {
	initialRouteName: 'Login',
	navigationOptions: {
		header: false
	}
});

const mapStateToProps = (state) => ({
	navigationState: state.loginNavigator
});

class LoginNavigatorWrapper extends Component {
	static middleware = createReactNavigationReduxMiddleware(
		'loginNavigator',
		state => state.loginNavigator
	);

	constructor(props) {
		super(props);

		this.addListener = createReduxBoundAddListener('loginNavigator');
	}

	render() {
		const { dispatch, navigationState } = this.props;
		return (
			<LoginNavigatorContainer
				navigation={
					addNavigationHelpers({
						dispatch: dispatch,
						state: navigationState,
						addListener: this.addListener
					})
				}
			/>
		);
	}
}

export const LoginNavigator = connect(mapStateToProps)(LoginNavigatorWrapper);