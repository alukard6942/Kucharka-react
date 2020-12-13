import React from 'react'

import Timer from './Timer'

class Item extends React.Component {

	constructor (props) {
		super(props)
		this.onClick = this.onClick.bind(this)

		this.state = {
			name        : props.name,
			desc        : props.desc,
			duration    : props.duration,
			styles      : {},
			styles_dark : {
				"color" : "rgba(68, 71, 90, 1)",
			},
			toggled     : false,
		}

	}


	onClick () {
		// togle styles
		if (this.state.toggled) {
			this.setState({styles : {} })
		} else {
			this.setState({styles : this.state.styles_dark })
		}

		this.setState({toggled : !this.state.toggled})
	}

	render () {return(<>

		<div className="row wlth_shadowp" style={this.state.styles} >
			<div className="wlth_desc">
			<p onClick={this.onClick}  className = "wlth_shadowp" style={this.state.styles}>
				{this.state.name} 
			</p>
			<h6 onClick={this.onClick} className = "wlth_shadowp" style={this.state.styles}>
				{this.state.desc}
			</h6>
			</div>

			{(this.state.duration) ? <Timer style={this.state.styles} cuntdown={this.state.duration}/> : "" } 
			 
		</div>

		<hr/>

	</>)}
}

export default Item
