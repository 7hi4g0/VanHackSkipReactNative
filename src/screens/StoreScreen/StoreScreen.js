import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreList from '../../components/StoreList';
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
			<StoreList
				stores={this.props.store.stores}
				onGotoStoreProducts={this.gotoStoreProducts}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen);