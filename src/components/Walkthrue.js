import React from 'react'

import Item from './Walkthrue/Item'

class Walkthrue extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			id : props.match.params.id,
			json : {},
			url : `https://spoonsprint.herokuapp.com/api/${props.match.params.id}`,
			items : 
			<img alt="ME:AL" id="loadingGif" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>,
		}

		fetch (this.state.url)
			.then( res => res.json())
			.then( out => {

				this.setState({items : [] })

				for (var i in out.inst) {
					let item = out.inst[i]

					this.setState({items : [...this.state.items, <Item 
						name     = {item.name}
						desc     = {item.desc}
						duration = {item.duration}
					/>]})
				}



				this.setState({json: out})
			})
			.catch( err => console.log(err))
	}

	render () {return(<>

		{this.state.items}
		
	</>)}
}

export default Walkthrue
