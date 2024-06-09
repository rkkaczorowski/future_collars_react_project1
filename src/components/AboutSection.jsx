import React from "react";
import AboutEmployee from "./AboutEmployee";

function AboutSection({ employees }) {
	return (
		<section id="about" className="section-about">
			<div className="container">
				<h1 className="main-title about-title">Nasi specjaliści</h1>
				{employees.map((employee, index) => (
					<AboutEmployee
						key={index}
						firstName={employee.firstName}
						lastName={employee.lastName}
						position={employee.position}
						description={employee.description}
						photo={employee.photo}
						isReverse={index % 2 !== 0}
					/>
				))}
			</div>
		</section>
	);
}

export default AboutSection;
