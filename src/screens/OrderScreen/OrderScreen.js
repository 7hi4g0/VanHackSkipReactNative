import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import Order from '../../components/Order';
import { ordersFetch } from '../../actions/orderActions';

const mapStateToProps = (state) => ({
	order: state.order
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: () => dispatch(ordersFetch()),
	// onCancel: (order) => dispatch(orderCancel(order))
});

class OrderScreen extends Component {

	componentDidMount() {
		this.props.onFetch();
	}

	// cancelOrder = (order) => () => this.props.onCancel(order);

	render() {
		const { order } = this.props;

		return (
			<ScrollView>
				<FlatList
					data={order.orders}
					keyExtractor={(item, index) => item.id}
					renderItem={({item}) => (
						<Order order={item} />
					)}
				/>
				{ order.error !== '' &&
					<View style={{flexDirection: 'row'}}>
						<Icon size={20} nameIos='ios-alert-outline' nameAndroid='error-outline'/>
						<Text>{order.error}</Text>
					</View>
				}
			</ScrollView>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);