import axios from 'axios';

const API_ENDPOINT = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1';

const Api = {
	getCousine: () => axios.get(`${API_ENDPOINT}/Cousine`),
};

export default Api;