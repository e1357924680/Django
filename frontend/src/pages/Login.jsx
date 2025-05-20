import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, loginUser } from "../services/userService";
import { jwtDecode } from "jwt-decode";

function Login({ setToken, setUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const data = await loginUser({ username, password });
			setToken(data.access);
			const userData = await getUserDetails(
				jwtDecode(data.access).user_id,
				data.access
			);
			console.log(userData.username);

			setUser(userData);
			navigate("/");
		} catch (error) {
			console.error("Login failed:", error);
			alert("Login failed. Please check your credentials.");
		}
	};

	return (
		<div className="container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div className="mb-3">
					<label>Username</label>
					<input
						type="text"
						className="form-control"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
