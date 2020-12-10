import React from 'react'

function Header() {

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
				Recommended recipes 
			</h2>
			</th>
	 	</tr>
	</table>
	<hr className="feedHeader"/>
	</>	)
}

export default Header 
