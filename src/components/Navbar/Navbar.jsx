import React, { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

// ICONS
import { BsPhoneVibrate } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GiMountaintop } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = ({ cartItems }) => {
	const [open, setOpen] = useState("burger-menu-body");

	// BURGER NAV FUNCTION
	const showBurgerNav = () => {
		if (open === "burger-menu-body") {
			setOpen("burger-menu-body open");
		} else {
			setOpen("burger-menu-body");
		}
	};
	const closeBurgerNav = () => {
		setOpen("burger-menu-body");
	};

	return (
		<>
			<nav className="nav">
				<div className="nav-one">
					<div className="nav-l">
						<BsPhoneVibrate className="icon"></BsPhoneVibrate>
						<a href="tel:777-888-999" className="nav-l-item">
							Support
						</a>
						<GrLanguage className="icon"></GrLanguage>
						<p className="nav-l-item">Languages</p>
					</div>
					<p className="sale">20% Off on Selected Items | Choose Your Bike</p>
					<div className="nav-r">
						<Link to="/login">
							<button className="btn-nav-one">Sign In</button>
						</Link>
					</div>
				</div>
				<div className="nav-two">
					<div className="wrapper">
						<div className="nav-container">
							<ul className="menu-body">
								<li>
									<NavLink
										to="/"
										className={({ isActive }) =>
											isActive ? "active nav-link" : " nav-link"
										}>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/bikes"
										className={({ isActive }) =>
											isActive ? "active nav-link" : " nav-link"
										}>
										Bikes
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/clothing"
										className={({ isActive }) =>
											isActive ? "active nav-link" : " nav-link"
										}>
										Clothing
									</NavLink>
								</li>
							</ul>
							<ul className={open}>
								<li>
									<Link
										to="/"
										className="burger-menu-items"
										onClick={() => closeBurgerNav()}>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/bikes"
										className="burger-menu-items"
										onClick={() => closeBurgerNav()}>
										Bikes
									</Link>
								</li>
								<li>
									<Link
										to="/clothing"
										className="burger-menu-items"
										onClick={() => closeBurgerNav()}>
										Clothing
									</Link>
								</li>
							</ul>

							<Link to="/basket" className="basket">
								<AiOutlineShopping></AiOutlineShopping>
								<span className="cart-items-number">
									{cartItems.length === 0 ? "" : cartItems.length}
								</span>
							</Link>

							<Link to="/" className="logo">
								<GiMountaintop></GiMountaintop>
								<p className="name">MountRide</p>
							</Link>
							<button className="menu-btn" onClick={() => showBurgerNav()}>
								{open === "burger-menu-body" ? (
									<BiMenuAltRight></BiMenuAltRight>
								) : (
									<AiOutlineClose></AiOutlineClose>
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
