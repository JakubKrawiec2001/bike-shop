import React from "react";
import "./Footer.scss";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper">
				<p className="footer-text">
					&copy; 2023 MountRide | Ride Your Bike On The Best Journey With Us
				</p>
				<p className="footer-socials-title">Follow us</p>
				<div className="footer-socials-box">
					<BsFacebook className="footer-socials-item"></BsFacebook>
					<AiFillTwitterCircle className="footer-socials-item"></AiFillTwitterCircle>
					<BsYoutube className="footer-socials-item"></BsYoutube>
					<AiFillInstagram className="footer-socials-item"></AiFillInstagram>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
