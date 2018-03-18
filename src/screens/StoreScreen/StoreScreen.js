import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
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

	render() {
		return (
			<FlatList
				data={this.props.store.stores}
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);