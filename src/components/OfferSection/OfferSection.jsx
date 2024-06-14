import OfferItem from "../OfferItem/OfferItem";

function OfferSection({ offers }) {
	return (
		<section id="offer" className="section-offer">
			<div className="container">
				<h1 className="main-title about-title">
					Czym zajmuje się nasza firma?
				</h1>
				<div className="item-container">
					{offers.map((offer, index) => (
						<OfferItem key={index} {...offer} />
					))}
				</div>
			</div>
		</section>
	);
}

export default OfferSection;
