import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ContactCard = props => {
	return (
		<li className="list-group-item">
			<div className="row w-100 ">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
						width="100px"
						height="100px"
						alt=""
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className="float-right">
						<Link to={"/edit/" + props.data.id}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">
						<strong>{props.data.full_name}</strong>
					</label>
					<br />
					<i className="fas fa-map-marker-alt text-black ml-1" />
					<span className="text-muted ml-3 pl-1">{props.data.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-black mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title={props.data.phone}
					/>
					<span className="text-muted small">{props.data.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-black mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.data.email}</span>
				</div>
			</div>
		</li>
	);
};
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	data: PropTypes.object
};
ContactCard.defaultProps = {
	onDelete: null
};
