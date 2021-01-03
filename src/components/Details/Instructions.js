import React from 'react'

function Instructions(props) {

    let inst = props.inst

    let items = []

    inst.forEach(element => {
        items.push(
            <div className="instItem">
                <h5 className="instName">{element.name}</h5>
                <h6 className="instDesc">{element.desc || ""}</h6>
            </div>
        );
    });

	return (
		<div  className="instDiv">
            {items}
		</div>
	)
}

export default Instructions
