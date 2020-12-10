import React from 'react'
import { Link } from "react-router-dom";

function Navbar () {

	return (

		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Kucharka
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mobile-nav"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="mobile-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/create">
								Creator
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/">
								recomended
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/views">
								best
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/favourite">
								favourite
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/new">
								new
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About							</Link>
						</li>
					</ul>
				</div>
			</div>
      	</nav>

	)
}

export default Navbar;
