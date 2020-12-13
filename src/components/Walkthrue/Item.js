import React from 'react'

import Timer from './Timer'

class Item extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			name    : props.name,
			desc    : props.desc,
			duration: props.duration,
		}

	}



	render () {return(<>

		<div className="row" >
			<div>
				<p> {this.state.name} </p>
				<h6>{this.state.desc} </h6>
			</div>

			{(this.state.duration) ? <Timer cuntdown={this.state.duration}/> : "" } 
			 
		</div>


	</>)}
}

export default Item
