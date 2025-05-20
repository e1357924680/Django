import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await registerUser({ username, email, password });
			navigate("/login");
		} catch (error) {
			console.error("Registration failed:", error);
			alert("Registration failed. Please try again.");
		}
	};

	return (
		<div className="container">
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
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
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
					Register
				</button>
			</form>
		</div>
	);
}

export default Register;
