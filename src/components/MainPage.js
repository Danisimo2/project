import React ,{Component} from 'react';
import AddMore from "./AddMore/addMore"
import Categories from "./categories/categories"
import "./MainPage.css"

class MainPage extends Component {
state={
	showBlock:false,
	showCategories:false
}
addNewCategory=()=>{
       this.setState({
	showBlock:!this.state.showBlock
})
	}



render(){
	
	return(
		<div className="wrapper">
		  <div className="allBalance">
		    <div className="balance">Balance</div> 
		    <div className="money">$300.00</div>
		  </div>
		  <div className="mainButtons">
		    <button className="charges">Charges</button>
		    <button>Incomes</button>
		  </div>
		  <div className="changeAndAdd">
		    <div className="ww">
		    	<span>My charges</span>
			    <select name="change" className="change">
			  	  <option value="thisWeek"defaultValue >This week</option>
			  	  <option value="thisMonth">This month</option>
				  <option value="thisYear">This year</option>
			  	</select>
		  	</div>
				<button className="add"onClick={this.addNewCategory}>Add more</button>
		  </div>
		  <div className="mainTable">
		    <div className="tbl">
		      <table>
			  <thead>
		        <tr className="mainTbl">
		          <th>Category</th>
		          <th>Description</th>
		          <th>Data</th>
		          <th>Money</th>
		          <th>Action</th>
		        </tr>
				</thead>
		      </table>
		    </div>
		  </div>
		  {this.state.showBlock ?
		  <AddMore />
		  :null
		  }
          {this.state.showCategories ?
		  <Categories />
		  :null
		  }
		</div>
	)
}
}
export default MainPage;