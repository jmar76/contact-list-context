import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const UpdateContact = () => {
	const { actions, store } = useContext(Context);
	const params = useParams();

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		if (params.id) {
			actions.getContact(params.id);
		}
		console.log("store.user.id: ", store.user.id);
		console.log("params desde Update: ", params);
	}, []);

	useEffect(() => {
		if (params.id == store.user.id) {
			setName(store.user.full_name);
			setPhone(store.user.phone);
			setEmail(store.user.email);
			setAddress(store.user.address);
		}
	}, [store.user]);

	const handleChangeName = event => setName(event.target.value);
	const handleChangePhone = event => setPhone(event.target.value);
	const handleChangeEmail = event => setEmail(event.target.value);
	const handleChangeAddress = event => setAddress(event.target.value);
	const handleSaveContact = event => {
		const newContact = {
			full_name: name,
			address: address,
			phone: phone,
			email: email,
			agenda_slug: store.agenda_slug
		};

		actions.updateContact(params.id, newContact);

		alert("Tu contacto " + name + " se ha guardado");
		setName("");
		setPhone("");
		setEmail("");
		setAddress("");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit an existing contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={handleChangeName}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChangeEmail}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChangePhone}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChangeAddress}
							value={address}
						/>
					</div>
					<Link to="/">
						<button type="button" className="btn btn-warning form-control" onClick={handleSaveContact}>
							Guardar Datos
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						Ir a contactos
					</Link>
				</form>
			</div>
		</div>
	);
};
