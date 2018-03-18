import React, { Component } from 'react';
import { Button, View, FlatList, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { cartAdd, cartRemove, cartDelete } from '../../actions/cartActions';
import { orderPlace } from '../../actions/orderActions';

const mapStateToProps = (state) => ({
	cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
	onAdd: (product) => dispatch(cartAdd(product)),
	onRemove: (product) => dispatch(cartRemove(product)),
	onDelete: (product) => dispatch(cartDelete(product)),
	onPlace: (deliveryInfo) => dispatch(orderPlace(deliveryInfo))
});

class CartScreen extends Component {
	state = {
		contact: '',
		deliveryAddress: ''
	};

	addItem = (product) => () => this.props.onAdd(product);
	removeItem = (product) => () => this.props.onRemove(product);
	deleteItem = (product) => () => this.props.onDelete(product);

	placeOrder = () => this.props.onPlace(this.state);

	setContact = (contact) => this.setState({ contact });
	setDeliveryAddress = (deliveryAddress) => this.setState({ deliveryAddress });

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
				<TextInput
					ref='ContactInput'
					placeholder='Input your contact'
					onChangeText={this.setContact}
					value={this.state.contact}
					onSubmitEditing={() => this.refs.DeliveryAddressInput.focus()}
				/>
				<TextInput
					ref='DeliveryAddressInput'
					placeholder='Input the delivery address'
					onChangeText={this.setDeliveryAddress}
					value={this.state.deliveryAddress}
				/>
				{ cart.error !== '' &&
					<View style={{flexDirection: 'row'}}>
						<Icon size={20} nameIos='ios-alert-outline' nameAndroid='error-outline'/>
						<Text>{cart.error}</Text>
					</View>
				}
				<Button title='Place Order' onPress={this.placeOrder}/>
			</ScrollView>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);