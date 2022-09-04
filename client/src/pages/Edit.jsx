import { Form, Button, Row, Col } from "react-bootstrap";
import Forms from "../components/forms";
import { useState } from "react";

const Edit = () => {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail(event.target.email.value);
		setUsername(event.target.username.value);
		setPassword(event.target.password.value);
	};

	return (
		<>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Forms
							label={"email"}
							placeholder={"masukkan email baru Anda"}
							type={"email"}
							name={"email"}
						/>
						<Forms
							label={"username"}
							placeholder={"masukkan username baru Anda"}
							type={"text"}
							name={"username"}
						/>
						<Forms
							label={"password"}
							placeholder={"masukkan password baru Anda"}
							type={"password"}
							name={"password"}
						/>
						<Button variant="primary" type="submit">
							Edit
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

export default Edit;
