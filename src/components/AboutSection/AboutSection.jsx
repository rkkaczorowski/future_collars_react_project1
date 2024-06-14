import AboutEmployee from "../AboutEmployee/AboutEmployee";
import "./AboutSection.css";

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
						alignRight={employee.position === "Data Analyst"}
					/>
				))}
			</div>
		</section>
	);
}

export default AboutSection;
