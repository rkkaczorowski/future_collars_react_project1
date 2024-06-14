import "./Footer.css";

function Footer() {
	return (
		<footer className="footer-content">
			<div className="footer-container">
				<p className="footer-text">
					Nazwa firmy - wszelkie prawa zastrzeżone, 2019
				</p>
				<nav className="footer-nav">
					<ul>
						<li>
							<a href="#">
								<i className="fa-brands fa-instagram social-icon"></i>
							</a>
							<a href="#">
								<i className="fa-brands fa-square-facebook social-icon"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
