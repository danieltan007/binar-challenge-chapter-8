import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

// let updateData = "";
// const getupdate = (event) => {
// 	updateData = event.target.value;
// };

const ModalUpdate = ({ email, username, password, onClick }) => {
	const [show, setShow] = useState(false);
	const [updateEmail, setUpdateEmail] = useState(email);
	const [updateUsername, setUpdateUsername] = useState(username);
	const [updatePassword, setUpdatePassword] = useState(password);

	useEffect(() => {
		setUpdateEmail(updateEmail);
	}, [updateEmail]);

	useEffect(() => {
		setUpdateUsername(updateUsername);
	}, [updateUsername]);

	useEffect(() => {
		setUpdatePassword(updatePassword);
	}, [updatePassword]);

	const handleSubmit = (event) => {
		console.log(
			"🚀 ~ file: modalUpdate.jsx ~ line 28 ~ handleSubmit ~ event",
			event
		);
		event.preventDefault();
		email = updateEmail.target["value"] || email;
		username = updateUsername.target["value"] || username;
		password = updatePassword.target["value"] || password;
	};

	const modalClose = () => setShow(false);
	const modalShow = () => setShow(true);
	return (
		<>
			<Button variant="danger" onClick={modalShow}>
				Update
			</Button>

			<Modal show={show} onHide={modalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update Player</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form
						onSubmit={(event) => {
							handleSubmit(event);
							onClick(username, password, email);
							modalClose();
						}}
					>
						<Form.Group className="mb-3">
							<Form.Label>email</Form.Label>
							<Form.Control
								type="email"
								placeholder="masukkan email baru Anda"
								name="email"
								defaultValue={email}
								onChange={setUpdateEmail}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="text"
								placeholder="masukkan username baru Anda"
								name="username"
								defaultValue={username}
								onChange={setUpdateUsername}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>password</Form.Label>
							<Form.Control
								type="password"
								defaultValue={password}
								placeholder="masukkan password baru Anda"
								name="password"
								onChange={setUpdatePassword}
								required
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Update Player
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={modalClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalUpdate;
