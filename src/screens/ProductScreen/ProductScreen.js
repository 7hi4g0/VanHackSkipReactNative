import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { productsFetch } from '../../actions/productActions';

const mapStateToProps = (state) => ({
	product: state.product
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: () => dispatch(productsFetch())
});

class ProductScreen extends Component {

	componentDidMount() {
		this.props.onFetch();
	}

	render() {
		return (
			<FlatList
				data={this.props.product.products}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
						<Text>{item.name}</Text>
						<Icon size={30} nameIos='ios-arrow-round-forward' nameAndroid='arrow-forward' />
					</View>
				)}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);