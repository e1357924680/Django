import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

async function registerUser(userData) {
	const response = await axios.post(`${API_URL}users/register/`, userData);
	return response.data;
}

async function loginUser(credentials) {
	const response = await axios.post(`${API_URL}token/`, credentials);
	return response.data;
}

async function refreshToken(refreshToken) {
	const response = await axios.post(`${API_URL}token/refresh/`, {
		refresh: refreshToken,
	});
	return response.data;
}
async function getUserDetails(userId, token) {
	const response = await axios.get(`${API_URL}users/${userId}/`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
}

export { registerUser, loginUser, refreshToken, getUserDetails };
