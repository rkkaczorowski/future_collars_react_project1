import "./Header.css";

function Header() {
	return (
		<header>
			<nav className="main-nav">
				<div className="nav-container container">
					<a href="#">moja firma</a>
					<ul className="nav-list">
						<li className="nav-item nav-link">
							<a href="#about">o nas</a>
						</li>
						<li className="nav-item nav-link">
							<a href="#offer">oferta</a>
						</li>
						<li className="nav-item link-contact">
							<a href="#" disabled>
								kontakt
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="main-header">
				<div className="header-shadow">
					<section className="header-container container">
						<h1 className="main-title header-title">
							Nasza firma oferuje najwyższej jakości produkty.
						</h1>
						<p className="main-subtitle subtitle">
							Nie wierz nam na słowo - sprawdź
						</p>
						<a href="#offer" className="offer-link header-offer">
							oferta
						</a>
					</section>
				</div>
			</div>
		</header>
	);
}

export default Header;
