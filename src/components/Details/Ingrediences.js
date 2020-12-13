import React from 'react'

function Ingrediences(props) {
	

	let ingr = props.ingr
	
	let items = [];

	ingr.forEach(element => {
		items.push(<li> {element.name} </li>)
	});

	return (
		<div  className="Ingrediences">
			<ul>
                {items}
            </ul>
		</div>
	)
}

export default Ingrediences