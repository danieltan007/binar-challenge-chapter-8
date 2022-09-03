import { Form, Button } from "react-bootstrap";

const FormCreate = () => {
	return (
		<Form>
			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Username</Form.Label>
				<Form.Control type="username" placeholder="username" />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default FormCreate; //
