import React from 'react'


function RecipeDetail (props) {

	console.log(props)

	let id = props.match.params.id

	return (
		<>
		<h1> Recept dummy </h1>
		<h2> {id} </h2>
		</>
	)
}

export default RecipeDetail;