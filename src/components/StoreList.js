import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';

export default class StoreList extends Component {
	static propTypes = {
		stores: PropTypes.array.isRequired,
		onGotoStoreProducts: PropTypes.func.isRequired
	};

	render() {
		const { stores, onGotoStoreProducts } = this.props;

		return (
			<FlatList
				data={stores}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<TouchableOpacity onPress={onGotoStoreProducts(item)}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<View style={{width: '90%'}}>
									<Text>{item.name}</Text>
									<Text>{item.address}</Text>
								</View>
							<Icon size={30} nameIos='ios-arrow-round-forward' nameAndroid='arrow-forward' />
						</View>
					</TouchableOpacity>
				)}
			/>
		);
	}
}