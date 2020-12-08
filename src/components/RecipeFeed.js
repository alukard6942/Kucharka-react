import React  from 'react';
import { useHistory } from "react-router-dom";
import ListElement from './RecipeFeed/ListElement';

// wherever class or function this is a componet
class RecipeFeed extends React.Component{

	constructor(props) {
		super(props)

		this.state = {
			json : [],
			//url : "https://spoonsprint.herokuapp.com/api",
			url : "https://cors-anywhere.herokuapp.com/https://spoonsprint.herokuapp.com/api",
			//url : "https://spoonsprint.herokuapp.com/api",
			items : [	
				<img src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" />
			],
		}

		
		// download json from backend
		fetch(this.state.url)
			.then(res => res.json())
			.then(out => {
				
				let l = out.length

				this.setState({ items : [] })

				for (var j = 0; j < l; j ++) {
					out[0].desc = `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

					`
					this.state.items.push(<ListElement data={out[j]}/>)
				}

				this.setState({json : out })

			})
			.catch(err => { throw err })
  	}

	render() {

		return (
			<>
				{this.state.items}
			</>
		)
	}
}

export default RecipeFeed;
