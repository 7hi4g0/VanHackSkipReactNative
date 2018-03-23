import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
	createReactNavigationReduxMiddleware,
	createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

import CousineScreen from '../screens/CousineScreen/CousineScreen';
import CousineStoreScreen from '../screens/CousineStoreScreen/CousineStoreScreen';
import StoreProductScreen from '../screens/StoreProductScreen/StoreProductScreen';

export const CousineNavigatorContainer = StackNavigator({
	Cousines: {
		screen: CousineScreen,
		navigationOptions: {
			title: 'Cousines',
			header: null
		}
	},
	CousineStore: {
		screen: CousineStoreScreen,
		navigationOptions: {
			title: 'Cousine Stores'
		}
	},
	CuisineStoreProduct: {
		screen: StoreProductScreen,
		navigationOptions: {
			title: 'Store Products'
		}
	}
}, {
	initialRouteName: 'Cousines'
});

const mapStateToProps = (state) => ({
	navigationState: state.cousineNavigator
});

class CousineNavigatorWrapper extends Component {
	static middleware = createReactNavigationReduxMiddleware(
		'cousineNavigator',
		state => state.cousineNavigator
	);

	constructor(props) {
		super(props);

		this.addListener = createReduxBoundAddListener('cousineNavigator');
	}

	render() {
		const { dispatch, navigationState } = this.props;
		return (
			<CousineNavigatorContainer
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

export const CousineNavigator = connect(mapStateToProps)(CousineNavigatorWrapper);