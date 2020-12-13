import React from 'react'

function Instructions(props) {

    let inst = props.inst

    let items = []

    inst.forEach(element => {
        items.push(<li>{element.name}</li>);
    });

	return (
		<div  className="Instructions">
             <ol>
                {items}
            </ol>
		</div>
	)
}

export default Instructions