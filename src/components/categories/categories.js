import React, { Component } from "react"

import AddNewCategory from "../AddNewCaregory/addNewCategory"

import "./categories.css"
import "./reset.css"

import dots from "../images/dots.svg";
import food from "../images/food.svg";



class Categories extends Component {

    state={
        showNewCategory:false,
        
    }
    
    newCategory=()=>{
        this.setState({
            showNewCategory :!this.state.showNewCategory
    })
     }	


    render(){


    return ( 
        <div className="categories-wraper">
            <div className="status">
                <h3>Balance</h3>
                <p>$ <span>0</span></p>
            </div>
            <div className="table-actions">
                <h3>Categories</h3>
                <button className="btnn"onClick={this.newCategory}>Add more</button>
            </div>
            <div className="categories-table">
                <ul className="table-header">
                    <li className="category-name">Category</li>
                    <li className="category-descr">Description</li>
                    <li className="category-date">Date</li>
                    <li className="category-action">Action</li>
                </ul>
                <ul className="table-row">
                    <li className="category-name"><img src={food} alt="money-tracker-logo"/> Food</li>
                    <li className="category-descr">For all my food </li>
                    <li className="category-date">26/12/2019</li>
                    <li className="category-action">
                        <img src={dots} alt="money-tracker-logo"/>
                    </li>
                </ul>
            </div>
            {this.state.showNewCategory ?
          <AddNewCategory />
           :null
           }

        </div> 
    )
}

 }
export default Categories;