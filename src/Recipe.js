import React from 'react'


function Recipe (props) {

	console.log(props)

	let id = props.match.params.id

	return (
		<>
		<h1> Recept dummy </h1>
		<h2> {id} </h2>
		</>
	)
}

export default Recipe
