import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

import Register from "./pages/Register";
import Search from "./pages/Search";

function App() {
	return (
		<Container className="p-4">
			<Row sm={1} md={1}>
				<Col className="p-3">
					<h1 align="center">Daftar Player</h1>
					<Register />
				</Col>
				<Col>
					<h1 align="center">Search</h1>
					<Search></Search>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
