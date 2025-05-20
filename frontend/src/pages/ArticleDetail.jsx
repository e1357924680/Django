import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditArticleModal from "../components/EditArticleModal";
import EditCommentModal from "../components/EditCommentModal";
import { getArticle } from "../services/articleService";
import {
	createCommentForArticle,
	getCommentsForArticle,
} from "../services/commentService";

function ArticleDetail({ token, user }) {
	const { id } = useParams();
	const [article, setArticle] = useState(null);
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [editingArticle, setEditingArticle] = useState(false);
	const [editingComment, setEditingComment] = useState(null);

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const data = await getArticle(id, token);
				setArticle(data);
			} catch (err) {
				console.error(err);
			}
		};

		const fetchComments = async () => {
			try {
				const data = await getCommentsForArticle(id, token);
				setComments(data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchArticle();
		fetchComments();
	}, [id, token]);

	const handleArticleUpdate = (updatedArticle) => {
		setArticle(updatedArticle);
	};

	const handleCommentSubmit = async (e) => {
		e.preventDefault();
		try {
			await createCommentForArticle(id, { content: newComment }, token);
			setNewComment("");
			const data = await getCommentsForArticle(id, token);
			setComments(data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleCommentUpdate = (updatedComment) => {
		setComments(
			comments.map((c) => (c.id === updatedComment.id ? updatedComment : c))
		);
	};

	if (!article) return <div className="container">Loading article...</div>;
	if (user && article) console.log(user.id, article.author_id);

	return (
		<div className="container">
			<h2>{article.title}</h2>
			<p>{article.content}</p>
			{token &&
				(user.id === article.author_id || user.is_admin || user.is_staff) && (
					<button
						className="btn btn-warning mb-3"
						onClick={() => setEditingArticle(true)}
					>
						Edit Article
					</button>
				)}
			{editingArticle && (
				<EditArticleModal
					article={article}
					token={token}
					onClose={() => setEditingArticle(false)}
					onArticleUpdated={handleArticleUpdate}
				/>
			)}
			<hr />
			<h4>Comments</h4>
			<ul className="list-group mb-3">
				{comments.map((comment) => (
					<li key={comment.id} className="list-group-item">
						<strong>{comment.author_username}:</strong> {comment.content}
						{token &&
							(user.id === comment.author_id ||
								user.is_admin ||
								user.is_staff) && (
								<button
									className="btn btn-link btn-sm float-end"
									onClick={() => setEditingComment(comment)}
								>
									Edit
								</button>
							)}
					</li>
				))}
			</ul>
			{editingComment && (
				<EditCommentModal
					comment={editingComment}
					token={token}
					onClose={() => setEditingComment(null)}
					onCommentUpdated={handleCommentUpdate}
				/>
			)}
			{token ? (
				<form onSubmit={handleCommentSubmit}>
					<div className="mb-3">
						<textarea
							className="form-control"
							placeholder="Write a comment..."
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							required
						></textarea>
					</div>
					<button className="btn btn-primary" type="submit">
						Post Comment
					</button>
				</form>
			) : (
				<p>Please log in to post a comment.</p>
			)}
		</div>
	);
}

export default ArticleDetail;
