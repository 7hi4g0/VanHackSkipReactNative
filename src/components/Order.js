import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from './Icon';

export default class Order extends Component {
	render() {
		const { order } = this.props;

		return (
			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
				<View style={{width: '80%'}}>
					<Text>{order.status}</Text>
					<Text>{order.storeId}</Text>
					<Text>{order.date}</Text>
					<Text>{order.deliveryAdress}</Text>
					<Text>{order.total.toFixed(2)}</Text>
				</View>
				{/* {
					order.status.toLowerCase() === 'waiting' &&
					<TouchableOpacity onPress={onCancel}>
						<Icon size={30} nameIos='ios-close-circle-outline' nameAndroid='cancel' />
					</TouchableOpacity>
				} */}
			</View>
		)
	}
}