import React from "react"
import "./addMore.css"
import AddMoreContent from "../AddMoreContent/addMoreContent"

class AddMore extends React.Component{
    render(){

return(
    <div className="main">
     <div className="balance">Balance</div>
     <div className="cash"><b>$</b>300,00</div>
     <AddMoreContent />
   </div>
      )
   }
}
export default AddMore