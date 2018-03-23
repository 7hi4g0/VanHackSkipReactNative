import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList';
import { productsFetch } from '../../actions/productActions';
import { cartAdd } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
	product: state.product
});

const mapDispatchToProps = (dispatch) => ({
	onFetch: () => dispatch(productsFetch()),
	onAdd: (product) => dispatch(cartAdd(product))
});

class ProductScreen extends Component {

	componentDidMount() {
		this.props.onFetch();
	}

	addItem = (product) => () => this.props.onAdd(product);

	render() {
		return (
			<ProductList
				products={this.props.product.products}
				onAddItem={this.addItem}
			/>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);