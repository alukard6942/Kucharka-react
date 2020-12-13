import React from 'react'

function ViewsF(props) {

    let views = props.views
    let fav = props.fav

	// posible TODO: ... incase of descripton longer then can fit
	//               though all description shuld be longer then can fit


    let iconSrc = "./notFav.svg";
    if(fav) iconSrc = "./fav.svg";

	return (
		<div  className="ViewsF">
            <div className="wrapper">
                <img class="starPicture"
                    height="35px"
                    src={iconSrc}
                    alt="Grapefruit slice atop a pile of other slices"
                    style={{ fill : "white" }}
                    />
                <h5>{views}</h5>
            </div>
		</div>
	)
}

export default ViewsF