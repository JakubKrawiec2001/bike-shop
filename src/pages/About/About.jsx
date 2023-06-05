import React from "react";
import "./About.scss";

// ICONS
import { FaQuoteRight } from "react-icons/fa";

// IMAGES
import about1 from "../../assets/images/about/about-1.jpg";
import about2 from "../../assets/images/about/about-2.jpg";


const About = () => {
	return (
		<section className="about">
			<div className="about-hero-bg">
				<div className="about-hero-shadow">
					<div className="about-hero-text-box">
						<h1 className="about-hero-title">About Us</h1>
						<p className="about-hero-title-text">
							Our bikes have been traveling with you for many years
						</p>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<div className="about-container">
					<p className="about-text">
						MountRide is a family business, which from the very beginning was
						accompanied by the belief that people on a bike are much happier.
					</p>
					<div className="about-box">
						<img src={about1} alt="" className="about-img" />
						<p className="about-text">
							MountRide's portfolio includes e-bikes, mountain bikes, gravel
							bikes, road bikes, tourist bikes, city bikes, children's bikes, as
							well as cargo bikes. Our wide offer allows you to choose a bike
							ideally suited to the user's needs. Our mission is to connect
							bicycles with people, so regardless of what motivates you to ride:
							better well-being, health aspects, comfort and speed of covering
							the next kilometers in the urban jungle, or starting in amateur or
							professional competitions - at MountRide we have a bike to measure
							your needs.
						</p>
					</div>
					<div className="about-quote-box">
						<FaQuoteRight className="about-quote-icon"></FaQuoteRight>
						<p className="about-quote-text">
							Life is like riding a bicycle, to keep your balance you have to
							keep moving
						</p>
						<p className="about-quote-author">— Alberta Einsteina</p>
					</div>
					<div className="about-box about-box-second">
						<img src={about2} alt="" className="about-img" />
						<p className="about-text">
							From the beginning, MountRide's desire was to be the first, the
							best, to give cyclists the best bikes for everyday riding or
							competitive sports. One of the key parameters of today's bicycles
							is lightness and durability. The experience gained during
							professional MTB competitions and the input of our competitors and
							technologists helped us create new, ultra-light, professional
							bicycles.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
