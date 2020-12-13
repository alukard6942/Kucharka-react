import React from 'react'

function Info(props) {

    let views = props.views
    let date = new Date(props.date)


    

	return (
		<div  className="Info">
                <h5>{views}</h5>
                <h5>{date.toDateString()}</h5>
		</div>
	)
}

export default Info