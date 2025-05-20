import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);

	const handleLogout = () => {
		setToken(null);
		setUser(null);
	};

	return (
		<Router>
			<Navbar
				token={token}
				user={user}
				onLogout={handleLogout}
				onProfileUpdate={setUser}
			/>
			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<Home token={token} />} />
					<Route
						path="/articles/:id"
						element={<ArticleDetail token={token} user={user} />}
					/>
					<Route
						path="/login"
						element={<Login setToken={setToken} setUser={setUser} />}
					/>
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
