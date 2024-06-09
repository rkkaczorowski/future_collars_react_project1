import React from "react";

function OfferItem({ isNew, serviceName, isFirstOrSecondInRow }) {
	return (
		<div className={`item ${isFirstOrSecondInRow ? "first-in-row" : ""}`}>
			{isNew && <span className="dot"></span>}
			<p className="service">{serviceName}</p>
			{isNew && <span className="text">(nowość)</span>}
		</div>
	);
}

export default OfferItem;
