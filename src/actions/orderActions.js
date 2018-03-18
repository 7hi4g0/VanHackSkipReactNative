import Api from '../config/Api';

export const ORDER_PLACE = 'ORDER_PLACE';
export const ORDER_PLACED = 'ORDER_PLACED';
export const ORDER_PLACE_ERROR = 'ORDER_PLACE_ERROR';
export const ORDERS_FETCH = 'ORDERS_FETCH';
export const ORDERS_FETCHED = 'ORDERS_FETCHED';
export const ORDERS_FETCH_ERROR = 'ORDERS_FETCH_ERROR';
// export const ORDER_CANCEL = 'ORDER_CANCEL';
// export const ORDER_CANCELED = 'ORDER_CANCELED';
// export const ORDER_CANCEL_ERROR = 'ORDER_CANCEL_ERROR';

export function orderPlace(deliveryInfo) {
	return (dispatch, getState) => {
		dispatch({
			type: ORDER_PLACE
		});

		const { customer, cart } = getState();

		let order = {
			storeId: cart.storeId,
			orderItems: cart.items,
			contact: deliveryInfo.contact,
			deliveryAddress: deliveryInfo.deliveryAddress,
			status: 'waiting',
			total: cart.items.reduce((total, item) => total + item.total, 0)
		};

		Api.postOrder(order, customer.token)
			.then((res) => {
				dispatch({
					type: ORDER_PLACED
				})
			}, (err) => {
				dispatch({
					type: ORDER_PLACE_ERROR,
					err: err.response.data.error
				})
			});
	};
}

export function ordersFetch() {
	return (dispatch, getState) => {
		dispatch({
			type: ORDERS_FETCH
		});

		const { customer } = getState();

		Api.getOrders(customer.token)
			.then((res) => {
				dispatch({
					type: ORDERS_FETCHED,
					orders: res.data
				})
			}, (err) => {
				dispatch({
					type: ORDERS_FETCH_ERROR,
					err: err.response.data.error
				})
			});
	}
}

// export function orderCancel(order) {
// 	return (dispatch, getState) => {
// 		dispatch({
// 			type: ORDER_CANCEL
// 		});

// 		const { customer } = getState();

// 		let canceldOrder = {
// 			id: order.id,
// 			storeId: order.storeId,
// 			orderItems: order.orderItems,
// 			contact: order.contact,
// 			deliveryAddress: order.deliveryAddress,
// 			status: 'canceled',
// 			total: order.total,
// 		};

// 		Api.postOrder(order, customer.token)
// 			.then((res) => {
// 				dispatch({
// 					type: ORDER_CANCELED
// 				})
// 			}, (err) => {
// 				dispatch({
// 					type: ORDER_CANCEL_ERROR,
// 					err: err.response.data.error
// 				})
// 			});
// 	};
// }