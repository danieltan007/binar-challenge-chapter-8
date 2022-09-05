import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { useState } from "react";

import Forms from "../components/forms";
import ModalUpdate from "../components/modalUpdate";

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

	const updateData = (username, password, email) => {
		setEmail(email);
		setUsername(username);
		setPassword(password);
		console.log("cek data masuk = ", email, username, password);
	};

	return (
		<>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit} method="post" action="#">
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
							<li>
								<ModalUpdate
									email={email}
									username={username}
									password={password}
									onClick={updateData}
								/>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Register;
