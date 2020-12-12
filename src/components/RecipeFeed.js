import React  from 'react'
import ListElement from './RecipeFeed/ListElement'
import Header from './RecipeFeed/Header'

// wherever class or function this is a componet
class RecipeFeed extends React.Component{

	constructor(props) {
		super(props)

		this.state = {
			mode : props.match.path.substring(1),
			json : [],
			//url : "https://spoonsprint.herokuapp.com/api",
			url : "https://cors-anywhere.herokuapp.com/https://spoonsprint.herokuapp.com/api",
			//url : "https://spoonsprint.herokuapp.com/api",
			items : [	
				<img alt="ME:AL" src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" />
			],
		}

		
		// download json from backend
		fetch(`${this.state.url}/${this.state.mode}`)
			.then(res => res.json())
			.then(out => {
				
				let l = out.length

				this.setState({ items : [] })

				for (var j = 0; j < l; j ++) {
					this.state.items.push(<ListElement
						className = "ListElement"
						data={out[j]}/>)
				}

				this.setState({json : out })

			})
			.catch(err => { throw err })
  	}

	render() {

		return (
			<>
				<Header title = {this.state.mode} />
				<div className="recipeFeed">
					{this.state.items}
				</div>
			</>
		)
	}
}

export default RecipeFeed;
