import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

async function getArticles(searchTerm = "", token = null) {
	let url = `${API_URL}articles/`;
	if (searchTerm) {
		url += `?search=${encodeURIComponent(searchTerm)}`;
	}
	const headers = token ? { Authorization: `Bearer ${token}` } : {};
	console.log(url);

	const response = await axios.get(url, { headers });
	return response.data;
}

async function getArticle(id, token = null) {
	const headers = token ? { Authorization: `Bearer ${token}` } : {};
	const response = await axios.get(`${API_URL}articles/${id}/`, { headers });
	return response.data;
}

async function createArticle(articleData, token) {
	const response = await axios.post(`${API_URL}articles/`, articleData, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
}

async function updateArticle(id, articleData, token) {
	const response = await axios.patch(`${API_URL}articles/${id}/`, articleData, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
}

async function deleteArticle(id, token) {
	const response = await axios.delete(`${API_URL}articles/${id}/`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
}

export { getArticles, getArticle, createArticle, updateArticle, deleteArticle };
