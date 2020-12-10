import React from 'react'

function Header(props) {


	let title = " Recommended Recipes "

	if (props.title == "new")
		title = " New recipes "
	if (props.title == "favourite")
		title = " Most favourite recipes "
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
				  <button className="dropbtn">
						 sort by : 
					</button>
				  <div className="dropdown-content">
				    <a href="/">recomended</a>
				    <a href="/views">best</a>
				    <a href="/favourite">favourite</a>
				    <a href="/new">new</a>
				  </div>
				</div>
			</th>
	 	</tr>
	</table>
	<hr className="feedHeader"/>
	</>	)
}

export default Header 
