import axios from 'axios';
import store from '../selectors/store'

const BASE_URL = 'http://localhost:4000'; // Replace with your API base URL

const ApiCall = async (method, url, data) => {
  const token = store.getState().auth.token;

  try {
    const config = {
      method,
      url: `${BASE_URL}${url}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (data) {
      config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default ApiCall;