import React from "react";
import "./Hero.scss"

// IMAGES
import heroR from "../../assets/images/hero-r.png";

const Hero = () => {
	return (
		<header className="hero">
			<div className="wrapper">
				<div className="hero-container">
					<div className="hero-l">
						<div className="hero-numbers">
							11<span className="hero-numbers-span">/05</span>
						</div>
						<h1 className="hero-title">
							Ride Your <span className="stroke-text">Bike</span> On The
							<span className="stroke-text"> Best </span>
							Journey With Us
						</h1>
						<p className="hero-description">
							Get your unique bicycle style with our various collections
						</p>
						<div className="hero-l-line">
							<span className="hero-l-line-span-one">01</span>
							<span className="hero-l-line-span-two">04</span>
						</div>
					</div>
					<div className="hero-r">
						<img src={heroR} alt="" className="hero-r-img" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
