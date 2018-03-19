import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { cousineStoresFetch } from '../../actions/cousineActions';

const mapStateToProps = (state) => ({
	cousine: state.cousine
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: (cousineId) => dispatch(cousineStoresFetch(cousineId))
});

class CousineStoreScreen extends Component {

	componentDidMount() {
		const { cousineId } = this.props.navigation.state.params;

		this.props.onFetch(cousineId);
	}

	gotoStoreProducts = (store) => () => this.props.navigation.navigate({ routeName: 'StoreProduct', params: { storeId: store.id }});

	render() {
		return (
			<FlatList
				data={this.props.cousine.stores}
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

export default connect(mapStateToProps, mapDispatchToProps)(CousineStoreScreen);