import React from "react"
import "./addNewCategory.css"



class AddNewCategory extends React.Component{
    

    render(){

return(
    <div className="main">
    <div className="contentt">
         <p className="charge">New Category</p>
            <div className="total">
                <p className="p1">Name</p>
                <input type="text"className="input"/>
            </div> 
            <div className="description">
                <p className="p2">Description</p>
                <input type="text"className="input1"/>
                </div>
            <div className="select">
                 <p className="p3">Select icon</p>
                 <select className="selectors">
                     <option defaultValue>Food</option>
                     <option>Clothes</option>
                     <option>Restaurants</option>
                     <option>Utility bills</option>
                     <option>Pets</option>
                </select>
            </div>
                <button className="btn">
                Add new category
                </button>
            </div>
                 </div>
         );
    }
}
export default AddNewCategory