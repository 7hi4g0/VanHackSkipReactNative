import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
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

	render() {
		return (
			<View>
				<FlatList
					data={this.props.cousine.cousines}
					keyExtractor={(item, index) => item.id}
					renderItem={({item}) => (
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<Text>{item.name}</Text>
							<Icon size={30} nameIos='ios-arrow-round-forward' nameAndroid='arrow-forward' />
						</View>
					)}
				/>
			</View>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CousineScreen);