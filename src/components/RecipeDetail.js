import React from 'react'

import Image from './RecipeFeed/Image'
import Info from './Details/Info'
import Ingrediences from './Details/Ingrediences'
import Instructions from './Details/Instructions'


class RecipeDetail extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			id : props.match.params.id,
			json : {},
			url : `https://spoonsprint.herokuapp.com/api/${props.match.params.id}`,
			image : 
			<img alt="ME:AL" id="loadingGif" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>,
		}

		this.onClick = this.onClick.bind(this)
		this.addToFav = this.addToFav.bind(this)
		this.remRec = this.remRec.bind(this)

		fetch (this.state.url)
			.then( res => res.json())
			.then( out => {
				this.setState({json: out})
				this.setState({image: <Image
					disClassName="detailImage"
					id = {this.state.id}
					width = '40%'
					height = '25%'
					/>})
				this.forceUpdate();
			})
			.catch( err => console.log(err))
	}

	onClick () {
		this.props.history.push ( `/walkthrough/${this.state.id}` )
	}

	addToFav () {
		fetch ('https://spoonsprint.herokuapp.com/api/setfavourite/' + this.props.match.params.id,
			{
				method: 'POST'
			}
		)
			.then( res => res.json())
			.then( out => {
				this.state.json.favourite = !this.state.json.favourite;
				
				this.forceUpdate();
			})
			.catch( err => console.log(err))
	}

	remRec() {
		if (window.confirm('Are you sure you want to save this thing into the database?')) {
		  } else {
			return;
		  }
		fetch ('https://spoonsprint.herokuapp.com/api/' + this.props.match.params.id,
			{
				method: 'DELETE'
			}
		)
			.then( res => res.json())
			.then( out => {
				this.props.history.push ( `../` )
			})
			.catch( err => console.log(err))
	}

	render () {
		
		let iconSrc = "../notFav.svg";
    	if(this.state.json.favourite) iconSrc = "../fav.svg";
		
		return(<>


		<div className="detailHeadWrap">
			<h1 className="detailHeadline"> {this.state.json.name} </h1>

			<img class="starClick"
						height="35px"
						src={iconSrc}
						alt="star"
						onClick = {this.addToFav}
						
			/>
		</div>

		
		<Info
			views = {this.state.json.views}
			date = {this.state.json.timestamp}
		/>
		
		<p class="detailDesc"> {this.state.json.desc} </p>

		<div className="detailBotWrap">
			
			{this.state.image}


			<Ingrediences
				ingr = {this.state.json.ingr || []}
			/>

		</div>

		<div className="detailInsWrap">
			<hr class = "detailruler"/>
			<Instructions
				inst = {this.state.json.inst || []}
			/>
		</div>

		<div className = "detailButtons">
			<hr/>
			<button className="detailRemove" onClick = {this.remRec}>
						Remove Recipe
			</button>

			<button className = "detailWalkthrue" onClick = {this.onClick}>
					Walkthrough
			</button>
		</div>
		
	</>)}
}

export default RecipeDetail;
