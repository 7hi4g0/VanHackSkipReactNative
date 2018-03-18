import React, { Component } from 'react';
import { Button, View, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { cartAdd, cartRemove, cartDelete } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
	cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
	onAdd: (product) => dispatch(cartAdd(product)),
	onRemove: (product) => dispatch(cartRemove(product)),
	onDelete: (product) => dispatch(cartDelete(product))
});

class CartScreen extends Component {

	addItem = (product) => () => this.props.onAdd(product);
	removeItem = (product) => () => this.props.onRemove(product);
	deleteItem = (product) => () => this.props.onDelete(product);

	placeOrder = () => { /*TODO*/ };

	render() {
		const { cart } = this.props;

		if (cart.items.length === 0) {
			return (
				<View>
					<Text>The cart is empty</Text>
				</View>
			);
		}

		return (
			<ScrollView>
				<FlatList
					data={cart.items}
					keyExtractor={(item, index) => item.productId}
					ListHeaderComponent={
						<Text>Cart</Text>
					}
					renderItem={({item}) => (
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<Text>{item.product.name}</Text>
							<Text>{item.price.toFixed(2)}</Text>
							<TouchableOpacity onPress={this.removeItem(item.product)}>
								<Icon size={30} nameIos='ios-remmove-outline' nameAndroid='remove-circle-outline' />
							</TouchableOpacity>
							<Text>{item.quantity}</Text>
							<TouchableOpacity onPress={this.addItem(item.product)}>
								<Icon size={30} nameIos='ios-add-outline' nameAndroid='add-circle-outline' />
							</TouchableOpacity>
							<Text>{item.total.toFixed(2)}</Text>
							<TouchableOpacity onPress={this.deleteItem(item.product)}>
								<Icon size={30} nameIos='ios-trash-outline' nameAndroid='delete' />
							</TouchableOpacity>
						</View>
					)}
				/>
				<Button title='Place Order' onPress={this.placeOrder}/>
			</ScrollView>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);