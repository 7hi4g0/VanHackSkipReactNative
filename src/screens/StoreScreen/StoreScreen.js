import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { storesFetch } from '../../actions/storeActions';

const mapStateToProps = (state) => ({
	store: state.store
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: () => dispatch(storesFetch())
});

class StoreScreen extends Component {

	componentDidMount() {
		this.props.onFetch();
	}

	gotoStoreProducts = (store) => () => this.props.navigation.navigate('StoreProduct', { storeId: store.id });

	render() {
		return (
			<FlatList
				data={this.props.store.stores}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<TouchableOpacity onPress={this.gotoStoreProducts(item)}>
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
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);