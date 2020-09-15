import React from 'react';

import Categories from "./categories/categories"
import logo from './images/logo.svg'


const showCategoriesList=()=>{
       this.setState({
	showCategories:!this.state.showCategories
})
	}

const Logo = () => {
	return(
		<div className="logo__container">
		  <div className="logo">
		    <img src={logo} alt="logo" className="img__logo" />
		    <p>MoneyTracker</p>
		  </div>
		  <div className="buttons_logo">
			  <a href="/home">Home</a>
			  <a href="#">Charts</a>
			  <a href="/categories">Categories</a>
		  </div>
		</div>
	)
}

export default Logo;