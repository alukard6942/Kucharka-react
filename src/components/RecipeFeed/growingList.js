import React from 'react'

class GrowingList extends React.component {

	constructor (props) {
		this.state = {
			list : [],
		}
	}

	render () { return (<>

		{this.state.list}

	</>)}

}

