import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import OfferSection from "./components/OfferSection";

import spec01 from "./images/spec01.jpg";
import spec02 from "./images/spec02.jpg";

function App() {
	const employees = [
		{
			firstName: "Jan",
			lastName: "Kowalski",
			position: "CEO",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
			photo: spec01,
		},
		{
			firstName: "Anna",
			lastName: "Nowak",
			position: "Data Analyst",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
			photo: spec02,
		},
	];

	const offers = [
		{ serviceName: "Usługa 1", isNew: true },
		{ serviceName: "Usługa 2", isNew: false },
		{ serviceName: "Usługa 3", isNew: false },
		{ serviceName: "Usługa 4", isNew: false },
		{ serviceName: "Usługa 5", isNew: false },
		{ serviceName: "Usługa 6", isNew: false },
	];

	return (
		<div>
			<Header />
			<main>
				<AboutSection employees={employees} />
				<OfferSection offers={offers} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
