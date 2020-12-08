import React from 'react'

function Description(props) {

	let name = props.name
	let desc = props.desc
	// posible TODO: ... incase of descripton longer then can fit
	//               though all description shuld be longer then can fit

	return (
		<div  className="Description">
			<b> {name} </b>
			<p> {desc} </p>
		</div>
	)
}

export default Description
