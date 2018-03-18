import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import {
	createReactNavigationReduxMiddleware,
	createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

import CousineScreen from '../screens/CousineScreen/CousineScreen';
import StoreScreen from '../screens/StoreScreen/StoreScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

export const MainNavigatorContainer = TabNavigator({
	Cousine: {
		screen: CousineScreen,
		navigationOptions: {
			title: 'Cousine'
		}
	},
	Store: {
		screen: StoreScreen,
		navigationOptions: {
			title: 'Store'
		}
	},
	Product: {
		screen: ProductScreen,
		navigationOptions: {
			title: 'Product'
		}
	}
}, {
	initialRouteName: 'Cousine'
});

const mapStateToProps = (state) => ({
	navigationState: state.mainNavigator
});

class MainNavigatorWrapper extends Component {
	static middleware = createReactNavigationReduxMiddleware(
		'mainNavigator',
		state => state.mainNavigator
	);

	constructor(props) {
		super(props);

		this.addListener = createReduxBoundAddListener('mainNavigator');
	}

	render() {
		const { dispatch, navigationState } = this.props;
		return (
			<MainNavigatorContainer
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

export const MainNavigator = connect(mapStateToProps)(MainNavigatorWrapper);