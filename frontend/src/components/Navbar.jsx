import { Link } from "react-router-dom";

function Navbar({ token, user, onLogout }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<div className="container">
				<Link className="navbar-brand" to="/">
					DjangoPress
				</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Articles
							</Link>
						</li>
						{user && user.is_admin && (
							<li className="nav-item">
								<Link className="nav-link" to="/users">
									Users
								</Link>
							</li>
						)}
					</ul>
					<ul className="navbar-nav">
						{token ? (
							<>
								<li className="nav-item">
									<span className="nav-link">
										Hello, {user && user.username ? user.username : "User"}
									</span>
								</li>
								<li className="nav-item"></li>
								<li className="nav-item">
									<button className="btn btn-link nav-link" onClick={onLogout}>
										Logout
									</button>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/register">
										Register
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
