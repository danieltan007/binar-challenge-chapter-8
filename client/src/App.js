import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Edit from "./pages/Edit";
import Register from "./pages/Register";

function App() {
	return (
		<Container className="p-4">
			<Row sm={1} md={1}>
				<h1 align="center">Edit Player</h1>
				<Col className="p-3">
					<Edit />
				</Col>
				<Col className="p-3">
					<h1 align="center">Daftar Player</h1>
					<Register />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
