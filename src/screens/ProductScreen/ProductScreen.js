import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { productsFetch } from '../../actions/productActions';
import { cartAdd } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
	product: state.product
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: () => dispatch(productsFetch()),
	onAdd: (product) => dispatch(cartAdd(product))
});

class ProductScreen extends Component {

	componentDidMount() {
		this.props.onFetch();
	}

	addItem = (product) => () => this.props.onAdd(product);

	render() {
		return (
			<FlatList
				data={this.props.product.products}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<TouchableOpacity onPress={this.addItem(item)}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<Text>{item.name}</Text>
							<Icon size={30} nameIos='ios-arrow-round-forward' nameAndroid='arrow-forward' />
						</View>
					</TouchableOpacity>
				)}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);