import React from 'react';

const MainPage = () => {
	return(
		<div>
		  <div className="allBalance">
		    <div className="balance">Balance</div> 
		    <div className="money">$300</div>
		  </div>
		  <div className="mainButtons">
		    <button className="charges">Charges</button>
		    <button>Incomes</button>
		  </div>
		  <div className="changeAndAdd">
		    <div className="ww">
		    	<span>My charges</span>
			    <select name="change" className="change">
			  	  <option value="thisWeek" selected>This week</option>
			  	  <option value="thisMonth">This month</option>
				  <option value="thisYear">This year</option>
			  	</select>
		  	</div>
		    <button className="add">Add more</button>
		  </div>
		  <div className="mainTable">
		    <div className="tbl">
		      <table>
		        <tr className="mainTbl">
		          <th>Category</th>
		          <th>Description</th>
		          <th>Data</th>
		          <th>Money</th>
		          <th>Action</th>
		        </tr>
		      </table>
		    </div>
		  </div>
		</div>
	)
}

export default MainPage;