import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

// let updateData = "";
// const getupdate = (event) => {
// 	updateData = event.target.value;
// };

const ModalUpdate = ({ email, username, password, onSubmit }) => {
	const [show, setShow] = useState(false);
	// const [updateEmail, setUpdateEmail] = useState();
	// const [updateUsername, setUpdateUsername] = useState();
	// const [updatePassword, setUpdatePassword] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		email = event.target.email.value;
		username = event.target.username.value;
		password = event.target.password.value;
		console.log("cek data modal = ", email, username, password);
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
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>email</Form.Label>
							<Form.Control
								type="email"
								placeholder="masukkan email baru Anda"
								name="email"
								defaultValue={email}
								// onChange={setUpdateEmail}
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
								required
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							onClick={() => {
								handleSubmit();
								onSubmit(username, password, email);
								// modalClose();
							}}
						>
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
