import { useState, useEffect } from "react";
import { getArticles } from "../services/articleService";

function Home({ token }) {
	const [allArticles, setAllArticles] = useState([]);
	const [displayedCount, setDisplayedCount] = useState(3);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const data = await getArticles(searchTerm, token);
				setAllArticles(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchArticles();
	}, [searchTerm, token]);

	const handleLoadMore = () => {
		setDisplayedCount((prev) => prev + 3);
	};

	const displayedArticles = allArticles.slice(0, displayedCount);

	return (
		<div className="container">
			<h2 className="mb-4">Latest Articles</h2>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Search articles..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<div className="row">
				{displayedArticles.map((article) => (
					<div className="col-md-4 mb-3" key={article.id}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{article.title}</h5>
								<p className="card-text">{article.content.slice(0, 100)}...</p>
								<a href={`/articles/${article.id}`} className="btn btn-primary">
									Read More
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			{displayedCount < allArticles.length && (
				<div className="text-center mt-3">
					<button className="btn btn-secondary" onClick={handleLoadMore}>
						Load More
					</button>
				</div>
			)}
		</div>
	);
}

export default Home;
