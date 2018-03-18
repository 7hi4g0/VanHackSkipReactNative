import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
	createReactNavigationReduxMiddleware,
	createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

import StoreScreen from '../screens/StoreScreen/StoreScreen';
import StoreProductScreen from '../screens/StoreProductScreen/StoreProductScreen';

export const StoreNavigatorContainer = StackNavigator({
	Stores: {
		screen: StoreScreen,
		navigationOptions: {
			title: 'Stores',
			header: null
		}
	},
	StoreProduct: {
		screen: StoreProductScreen,
		navigationOptions: {
			title: 'Store Products'
		}
	}
}, {
	initialRouteName: 'Stores'
});

const mapStateToProps = (state) => ({
	navigationState: state.storeNavigator
});

class StoreNavigatorWrapper extends Component {
	static middleware = createReactNavigationReduxMiddleware(
		'storeNavigator',
		state => state.storeNavigator
	);

	constructor(props) {
		super(props);

		this.addListener = createReduxBoundAddListener('storeNavigator');
	}

	render() {
		const { dispatch, navigationState } = this.props;
		return (
			<StoreNavigatorContainer
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

export const StoreNavigator = connect(mapStateToProps)(StoreNavigatorWrapper);