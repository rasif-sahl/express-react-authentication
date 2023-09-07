// api.js
import ApiCall from './apiCall'; // Assuming ApiCall is defined in another file

export async function getUsers() {
  try {
    const data = await ApiCall('GET', '/api/user', null);
    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}
