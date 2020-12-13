import React from 'react'

function Ingrediences(props) {
	

	let ingr = props.ingr
	
	let items = [];

	ingr.forEach(element => {
		items.push(
			<div className="ingrItem">
				<h5 className="ingrName">{element.name + " "}</h5>
				<h5 className="ingrAmount">{element.amount || ""}</h5>
				<h5 className="ingrUnit">{" " + element.unit || ""}</h5>
			</div>
			)
	});

	return (
		<div  className="ingrDiv">
            {items}
		</div>
	)
}

export default Ingrediences