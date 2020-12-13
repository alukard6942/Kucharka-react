import React from 'react'


class Image extends React.Component {

	constructor (props) {
		super(props)
		this.id = props.id

		let width = props.width
		let height = props.height
		this.clName = props.disClassName || ""

		if (width) 
			this.width = width
		else 
			this.width = ""

		if (height) 
			this.height = height
		else 
			this.height = ""

				

		// this is a provizory mockup of backed
		this.imageBackend = [
			"https://i.imgur.com/CUG0Aof.jpeg",
			"https://i.imgur.com/A14QwVW.jpg",
			"https://i.imgur.com/DtCxaCO.jpg",
		]
	}


	// provizorni fc
	idToNum(id) {
		var sum = 0
		
		for(var i = 0; i < id.length; i++) {
			sum += id.charCodeAt(i)
		}

		return sum % this.imageBackend.length 
	}

	// gets image from backend
	getImage() {

		return this.imageBackend[this.idToNum(this.id)]
	}

	render() {
		return (
			<>
			<img className={this.clName} src={this.getImage()} alt = "food prewie" height={this.width} width={this.height} />
			</>
		)
	}
}

export default Image
