import React from "react";
import { Link } from "react-router-dom";
import "./Bestseller.scss";

const Bestseller = () => {
	return (
		<section className="bestseller">
			<div className="wrapper">
				<div className="bestseller-container">
					<p className="bestseller-name">The brand-new</p>
					<p className="bestseller-name">Gallio Force AXS</p>
					<p className="bestseller-description">
						An uncompromising design for long distances
					</p>
					<Link to="/bestseller">
						<button className="btn">Shop the bike</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Bestseller;
