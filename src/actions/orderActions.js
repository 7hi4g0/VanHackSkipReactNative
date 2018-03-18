import Api from '../config/Api';

export const ORDER_PLACE = 'ORDER_PLACE';
export const ORDER_PLACED = 'ORDER_PLACED';
export const ORDER_PLACE_ERROR = 'ORDER_PLACE_ERROR';

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