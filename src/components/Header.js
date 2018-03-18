import React, { Component } from 'react'
import { View, Button } from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<View>
				<Button title='Menu' onPress={() => this.props.navigation.navigate('DrawerToggle')} />
			</View>
		)
	}
}