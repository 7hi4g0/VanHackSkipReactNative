import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { cousinesFetch } from '../../actions/cousineActions';

const mapStateToProps = (state) => ({
	cousine: state.cousine
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: () => dispatch(cousinesFetch())
});

class CousineScreen extends Component {

	componentDidMount() {
		this.props.onFetch();
	}

	gotoCousineStores = (cousine) => () => this.props.navigation.navigate('CousineStore', { cousineId: cousine.id });

	render() {
		return (
			<FlatList
				data={this.props.cousine.cousines}
				keyExtractor={(item, index) => item.id}
				renderItem={({item}) => (
					<TouchableOpacity onPress={this.gotoCousineStores(item)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CousineScreen);