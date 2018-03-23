import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreList from '../../components/StoreList';
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

	gotoStoreProducts = (store) => () => this.props.navigation.navigate({ routeName: 'CuisineStoreProduct', params: { storeId: store.id }});

	render() {
		return (
			<StoreList
				stores={this.props.cousine.stores}
				onGotoStoreProducts={this.gotoStoreProducts}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CousineStoreScreen);