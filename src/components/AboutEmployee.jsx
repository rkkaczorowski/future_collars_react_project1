import React from "react";

function AboutEmployee({
	firstName,
	lastName,
	position,
	description,
	photo,
	isReverse,
}) {
	const photoClass = position === "Data Analyst" ? "photo" : "";

	return (
		<div className={`about-container ${isReverse ? "reverse" : ""}`}>
			<div
				className={`personal-photo ${position
					.toLowerCase()
					.replace(/\s+/g, "-")} ${photoClass}`}
				style={{ backgroundImage: `url(${photo})` }}
			></div>
			<div className={`centered ${isReverse ? "reversetext" : ""}`}>
				<span
					className={`subtitle about-subtitle ${isReverse ? "reverse" : ""}`}
				>
					{firstName} {lastName} [{position}]
				</span>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default AboutEmployee;
