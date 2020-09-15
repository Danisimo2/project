import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Logo from './components/Logo.js';
import MainPage from './components/MainPage.js';
import Categories from "./components/categories/categories"
import logo from './components/images/logo.svg';


function App() {
  return (
  	<BrowserRouter>
	  <Logo />
	  <Route path ='/home'component={MainPage} />
      <Route path ='/categories'component={Categories}/>
	</BrowserRouter>
  );
}

export default App;
