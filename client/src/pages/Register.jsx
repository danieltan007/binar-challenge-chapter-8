import { Form, Button, Row, Col } from "react-bootstrap";
import Forms from "../components/forms";
import { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail(event.target.regisEmail.value);
		setUsername(event.target.regisUsername.value);
		setPassword(event.target.regisPassword.value);
	};

	return (
		<>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Forms
							label={"email"}
							placeholder={"masukkan email Anda"}
							type={"email"}
							name={"regisEmail"}
						/>
						<Forms
							label={"username"}
							placeholder={"masukkan username Anda"}
							type={"text"}
							name={"regisUsername"}
						/>
						<Forms
							label={"password"}
							placeholder={"masukkan password Anda"}
							type={"password"}
							name={"regisPassword"}
						/>
						<Button variant="success" type="submit">
							Register
						</Button>
					</Form>
				</Col>
				<Col>
					<h2>Show Data</h2>
					<div id="tampilData">
						<ul>
							<li>Email : {email}</li>
							<li>Username : {username}</li>
							<li>Password : {password}</li>
						</ul>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Register;
