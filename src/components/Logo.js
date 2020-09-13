import React from 'react';

import logo from './images/logo.svg'

const Logo = () => {
	return(
		<div className="logo__container">
		  <div className="logo">
		    <img src={logo} alt="logo" className="img__logo" />
		    <p>MoneyTracker</p>
		  </div>
		  <div className="buttons_logo">
			  <a href="#">Home</a>
			  <a href="#">Charts</a>
			  <a href="#">Categories</a>
		  </div>
		</div>
	)
}

export default Logo;