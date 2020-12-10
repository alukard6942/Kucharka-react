import React from 'react'

function Header(props) {


	let title = " Recommended Recipes "

	if (props.title == "new")
		title = " New recipes "
	if (props.title == "favorite")
		title = " Most favorite recipes "
	if (props.title == "views")
		title = " Most viewed recipes "
	

	let style={
		"text-align":"right"
	}

	return ( <>
	<table>
	 	<colgroup className = "feedRow">
	    	<col span="2"/>
	    	<col/>
	 	</colgroup>
	 	<tr>
	 	 	<th>
			<h2>
				{title}
			</h2>
			</th>
	 	 	<th>
				<div className="dropdown">
				  <button className="dropbtn">Dropdown</button>
				  <div className="dropdown-content">
				    <a href="#">Link 1</a>
				    <a href="#">Link 2</a>
				    <a href="#">Link 3</a>
				  </div>
				</div>
			</th>
	 	</tr>
	</table>
	<hr className="feedHeader"/>
	</>	)
}

export default Header 
