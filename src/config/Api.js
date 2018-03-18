import axios from 'axios';

const API_ENDPOINT = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1';

const Api = {
	getCousine: () => axios.get(`${API_ENDPOINT}/Cousine`),

	postCustomerAuth: (login) => axios.post(`${API_ENDPOINT}/Customer/auth`, null, {params: login}),
	postCustomer: (customer) => axios.post(`${API_ENDPOINT}/Customer`, customer),

	getStore: () => axios.get(`${API_ENDPOINT}/Store`),

	getProduct: () => axios.get(`${API_ENDPOINT}/Product`),

	postOrder: (order, token) => axios.post(`${API_ENDPOINT}/Order`, order, { headers: {Authorization: 'Bearer ' + token}}),
};

export default Api;