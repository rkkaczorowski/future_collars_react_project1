import React from "react";
import "./OfferItem.css";

function OfferItem({ isNew, serviceName }) {
	return (
		<div className="item">
			{isNew && <span className="dot"></span>}
			<p className="service">{serviceName}</p>
			{isNew && <span className="text">(nowość)</span>}
		</div>
	);
}

export default OfferItem;
