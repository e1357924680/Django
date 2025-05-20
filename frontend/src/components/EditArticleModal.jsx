import { useState } from "react";
import { updateArticle } from "../services/articleService";

function EditArticleModal({ article, token, onClose, onArticleUpdated }) {
	const [title, setTitle] = useState(article.title);
	const [content, setContent] = useState(article.content);
	const [error, setError] = useState(null);

	const handleSave = async () => {
		try {
			const updated = await updateArticle(
				article.id,
				{ title, content },
				token
			);
			onArticleUpdated(updated);
			onClose();
		} catch (err) {
			setError("Failed to update article.");
			console.error(err);
		}
	};

	return (
		<div
			className="modal d-block"
			tabIndex="-1"
			role="dialog"
			style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Article</h5>
						<button type="button" className="close btn" onClick={onClose}>
							<span>&times;</span>
						</button>
					</div>
					<div className="modal-body">
						{error && <div className="alert alert-danger">{error}</div>}
						<div className="mb-3">
							<label>Title</label>
							<input
								type="text"
								className="form-control"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label>Content</label>
							<textarea
								className="form-control"
								rows="5"
								value={content}
								onChange={(e) => setContent(e.target.value)}
							></textarea>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={onClose}
						>
							Cancel
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleSave}
						>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditArticleModal;
