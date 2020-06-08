import React from 'react'

const Header = () => {
    return (
			<header className="header">
				<div className="container">
					<a href="/" className="header__logo">
						<img className="header__logo-img" src="img/instagram-logo.svg" alt="Instagram Logo" />
					</a>
					<div className="header__direct">
						<button className="header__button">
							<a href="/" className="header__direct-img">
								<i className="far fa-paper-plane"></i>
							</a>
						</button>
					</div>
				</div>
			</header>
    )
}

export default Header;
