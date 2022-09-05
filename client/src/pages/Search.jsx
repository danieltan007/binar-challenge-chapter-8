import { Form } from "react-bootstrap";
import { useState } from "react";

const Search = () => {
	const [id, setId] = useState();
	const handleChange = (event) => {
		console.log(
			"🚀 ~ file: Search.jsx ~ line 14 ~ handleChange ~ event",
			event
		);
		setId(event.target.value);
	};

	return (
		<>
			<Form.Group className="mb-3">
				<Form.Label>Search</Form.Label>
				<Form.Control
					type="text"
					placeholder="masukkan id player yang akan di cari"
					name="cari"
					onChange={(event) => {
						handleChange(event);
					}}
				/>
			</Form.Group>
			<br />
			<p>Yang di cari = {id}</p>
		</>
	);
};

export default Search;
