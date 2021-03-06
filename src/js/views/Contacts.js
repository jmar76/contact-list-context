import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { actions, store } = useContext(Context);
	useEffect(() => {
		actions.listContacts(store.agenda_slug);
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-dark" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((element, index) => (
							<ContactCard
								onDelete={() => setState({ showModal: true, data: element })}
								key={index}
								data={element}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} data={state.data} />
		</div>
	);
};
