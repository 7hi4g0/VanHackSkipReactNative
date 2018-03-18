import React, { Component } from 'react';
import {
	StyleSheet
} from 'react-native';

import LoginNavigator from './src/navigators/LoginNavigator';

export default class App extends Component {
	render() {
		return (
			<LoginNavigator />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
