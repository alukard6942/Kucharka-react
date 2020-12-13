import React from 'react'

class Timer extends React.Component {

	constructor (props) {
		super(props)

		this.onClick   = this.onClick.bind(this)
		this.EventLoop = this.EventLoop.bind(this)

		this.state = {
			time   : Number(props.cuntdown),
			running: false,
		}
	}

	async EventLoop () {
		const sleep = (milliseconds) => {
			return new Promise(resolve => setTimeout(resolve, milliseconds))
		}
		// event loop
		while (this.state.running && this.state.time > 0 ){

			await sleep(1000)
			this.setState({time : this.state.time-1})
		}
	}

	onClick () {
		this.state.running = !this.state.running
		this.EventLoop()

		console.log(this.state)
	}

	render () {return(<>

		<div className="wlth_box" onClick={this.onClick} >
			{this.state.time}
		</div>
	</>)}
}

export default Timer
