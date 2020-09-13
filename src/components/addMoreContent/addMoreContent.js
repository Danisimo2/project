import React from "react"
import "./addMoreContent.css"

class AddMoreContent extends React.Component{
    render(){

return(
    <div className="content">
         <p className="charge">New Charge</p>
            <div className="total">
                <p className="p1">Total</p>
                <input type="text"className="input"/>
            </div> 
            <div className="description">
                <p className="p2">Description</p>
                <input type="text"className="input1"/>
                </div>
            <div className="select">
                 <p className="p3">Select category</p>
                 <select className="selectors">
                     <option selected>Food</option>
                     <option>Clothes</option>
                     <option>Restaurants</option>
                     <option>Utility bills</option>
                     <option>Pets</option>
                </select>
            </div>
            <div className="date">
                 <p className="p4">Date</p> 
                 <input type="date"className="input-date"/>
           </div>
                <button className="btn">Add new income</button>
            </div>

         );
    }
}
export default AddMoreContent