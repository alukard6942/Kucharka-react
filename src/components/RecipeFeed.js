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
			items : [],
		}

		
		// download json from backend
		fetch(this.state.url)
			.then(res => res.json())
			.then(out => {
				
				let l = out.length

				for (var j = 0; j < l; j ++) {
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
