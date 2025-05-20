import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

async function getCommentsForArticle(articleId, token = null) {
	const headers = token ? { Authorization: `Bearer ${token}` } : {};
	const response = await axios.get(`${API_URL}comments/${articleId}/`, {
		headers,
	});
	return response.data;
}

async function createCommentForArticle(articleId, commentData, token) {
	const response = await axios.post(
		`${API_URL}comments/${articleId}/`,
		commentData,
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	return response.data;
}

async function deleteComment(commentId, token) {
	const response = await axios.delete(
		`${API_URL}comments/delete/${commentId}/`,
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	return response.data;
}

export { getCommentsForArticle, createCommentForArticle, deleteComment };
