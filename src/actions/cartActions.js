export const CART_ADD = 'CART_ADD'
export const CART_REMOVE = 'CART_REMOVE'
export const CART_DELETE = 'CART_DELETE'

export function cartAdd(product) {
	return {
		type: CART_ADD,
		product
	};
}

export function cartRemove(product) {
	return {
		type: CART_REMOVE,
		product
	};
}

export function cartDelete(product) {
	return {
		type: CART_DELETE,
		product
	};
}