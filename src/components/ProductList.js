import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';

export default class ProductList extends Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		onAddItem: PropTypes.func.isRequired
	};

	render() {
		const { products, onAddItem } = this.props;

		return (
			<FlatList
				data={products}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<TouchableOpacity onPress={onAddItem(item)}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<View style={{width: '80%'}}>
								<Text>{item.name}</Text>
								<Text>{item.description}</Text>
							</View>
							<Text>{item.price.toFixed(2)}</Text>
							<Icon size={30} nameIos='ios-arrow-round-forward' nameAndroid='local-grocery-store' />
						</View>
					</TouchableOpacity>
				)}
			/>
		);
	}
}