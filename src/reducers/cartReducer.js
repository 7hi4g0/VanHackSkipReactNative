import {
	CART_ADD,
	CART_REMOVE,
	CART_DELETE
} from '../actions/cartActions';
import {
	ORDER_PLACE,
	ORDER_PLACED,
	ORDER_PLACE_ERROR
} from '../actions/orderActions';

const INITIAL_STATE = {
	items: [],
	storeId: 0,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	let product = action.product;
	let items = state.items;
	let itemIndex,
		item;
	
	if (product) {
		if (state.storeId !== 0 && state.storeId !== product.storeId) {
			return state;
		}
		itemIndex = items.findIndex((i) => i.productId === product.id)
	}

	switch (action.type) {
		case CART_ADD:
			if (itemIndex > -1) {
				item = {
					...items[itemIndex]
				};

				item.quantity += 1;
				item.total = item.quantity * item.price;

				items = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex+1)];
			} else {
				item = {
					productId: product.id,
					price: product.price,
					quantity: 1,
					total: product.price,
					product
				};

				items = [...items, item];
			}

			return {
				...state,
				storeId: product.storeId,
				items
			};
		case CART_REMOVE:
			if (itemIndex > -1) {
				item = {
					...items[itemIndex]
				};

				item.quantity -= 1;
				item.total = item.quantity * item.price;

				if (item.quantity === 0) {
					items = [...items.slice(0, itemIndex), ...items.slice(itemIndex+1)];
				} else {
					items = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex+1)];
				}

			}

			return {
				...state,
				storeId: items.length === 0 ? 0 : product.storeId,
				items
			};
		case CART_DELETE:
			if (itemIndex > -1) {
				items = [...items.slice(0, itemIndex), ...items.slice(itemIndex+1)];
			}

			return {
				...state,
				storeId: items.length === 0 ? 0 : product.storeId,
				items
			};
		case ORDER_PLACE:
			return {
				...state,
				error: ''
			};
		case ORDER_PLACED:
			return INITIAL_STATE;
		case ORDER_PLACE_ERROR:
			return {
				...state,
				error: action.err
			};
		default:
			return state;
	}
}