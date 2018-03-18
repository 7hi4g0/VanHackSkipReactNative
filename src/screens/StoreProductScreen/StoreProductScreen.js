import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { storeProductsFetch } from '../../actions/storeActions';
import { cartAdd } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
	store: state.store
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: (storeId) => dispatch(storeProductsFetch(storeId)),
	onAdd: (product) => dispatch(cartAdd(product))
});

class StoreProductScreen extends Component {

	componentDidMount() {
		const { storeId } = this.props.navigation.state.params;

		this.props.onFetch(storeId);
	}

	addItem = (product) => () => this.props.onAdd(product);

	render() {
		return (
			<FlatList
				data={this.props.store.products}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<TouchableOpacity onPress={this.addItem(item)}>
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
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreProductScreen);