import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList';
import { storeProductsFetch } from '../../actions/storeActions';
import { cartAdd } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
	store: state.store
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: (storeId) => dispatch(storeProductsFetch(storeId)),
	onAdd: (product) => dispatch(cartAdd(product))
});

class StoreProductScreen extends Component {

	componentDidMount() {
		const { storeId } = this.props.navigation.state.params;

		this.props.onFetch(storeId);
	}

	addItem = (product) => () => this.props.onAdd(product);

	render() {
		return (
			<ProductList
				products={this.props.store.products}
				onAddItem={this.addItem}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreProductScreen);