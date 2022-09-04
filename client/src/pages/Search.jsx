import { Form, Button, Row, Col } from "react-bootstrap";
import Forms from "../components/forms";
import { useState } from "react";

const Search = () => {
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [exp, setExp] = useState();
	const [lvl, setLvl] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail(event.target.searchEmail.value);
		setUsername(event.target.searchUsername.value);
		setExp(event.target.searchExp.value);
		setLvl(event.target.searchLvl.value);
	};

	return (
		<>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Forms
							label={"email"}
							placeholder={"masukkan email"}
							type={"email"}
							name={"searchEmail"}
						/>
						<Forms
							label={"username"}
							placeholder={"masukkan username"}
							type={"text"}
							name={"searchUsername"}
						/>
						<Forms
							label={"experience"}
							placeholder={"masukkan experience"}
							type={"number"}
							name={"searchExp"}
						/>
						<Forms
							label={"level"}
							placeholder={"masukkan level"}
							type={"number"}
							name={"searchLvl"}
						/>
						<Button variant="success" type="submit">
							Search
						</Button>
					</Form>
				</Col>
				<Col>
					<h2>Show Data</h2>
					<div id="tampilData">
						<ul>
							<li>Email : {email}</li>
							<li>Username : {username}</li>
							<li>Experience : {exp}</li>
							<li>Level : {lvl}</li>
						</ul>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Search;
