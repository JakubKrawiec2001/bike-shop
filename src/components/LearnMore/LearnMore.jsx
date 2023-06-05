import React from "react";
import { Link } from "react-router-dom";
import "./LearnMore.scss";

const LearnMore = () => {
	return (
		<section className="learn-more">
			<div className="learn-more-shadow"></div>
			<div className="wrapper">
				<div className="learn-more-text-box">
					<h2 className="learn-more-title">Get to know MountRide better</h2>

					<Link to="/about" className="btn-learn-more">
						<button className="btn ">Learn more</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LearnMore;
