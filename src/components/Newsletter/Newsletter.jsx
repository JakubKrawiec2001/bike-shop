import React from "react";
import "./Newsletter.scss";

const Newsletter = () => {
	return (
		<section className="newsletter">
			<div className="wrapper">
				<div className="newsletter-container">
					<div className="newsletter-l">
						<p className="newsletter-first-text">
							Subscribe to the newsletter and stay up to date.
						</p>
						<p className="newsletter-second-text">
							Receive information on new products, special offers and the best
							cycling advice from MountRide!
						</p>
					</div>
                    <div className="newsletter-r">
                        <input type="text" placeholder="Your e-mail address" className="newsletter-input"/>
                        <button className="btn">Subscribe</button>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
