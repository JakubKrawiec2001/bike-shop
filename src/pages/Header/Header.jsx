import React from "react";

import Hero from "../../components/Hero/Hero";
import Brands from "../../components/Brands/Brands";
import Bestseller from "../../components/Bestseller/Bestseller";
import TopProducts from "../../components/TopProducts/TopProducts";
import LearnMore from "../../components/LearnMore/LearnMore";

const Header = () => {
	return (
		<>
			<Hero></Hero>
			<Brands></Brands>
			<Bestseller></Bestseller>
			<TopProducts></TopProducts>
			<LearnMore></LearnMore>
		</>
	);
};

export default Header;
