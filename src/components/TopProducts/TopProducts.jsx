import React from "react";
import "./TopProducts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import topProduct1 from "../../assets/images/top-products/top-product-1.png";
import topProduct2 from "../../assets/images/top-products/top-product-2.png";
import topProduct3 from "../../assets/images/top-products/top-product-3.png";
import topProduct4 from "../../assets/images/top-products/top-product-4.png";
import topProduct5 from "../../assets/images/top-products/top-product-5.png";
import topProduct6 from "../../assets/images/top-products/top-product-6.png";
import topProduct7 from "../../assets/images/top-products/top-product-7.png";
import topProduct8 from "../../assets/images/top-products/top-product-8.png";
import topProduct9 from "../../assets/images/top-products/top-product-9.png";
import topProduct10 from "../../assets/images/top-products/top-product-10.png";
import topProduct11 from "../../assets/images/top-products/top-product-11.png";
import topProduct12 from "../../assets/images/top-products/top-product-12.png";

// ICONS
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const TopProducts = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 2,
		initialSlide: 0,
		nextArrow: <GrFormNext></GrFormNext>,
		prevArrow: <GrFormPrevious></GrFormPrevious>,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};
	return (
		<section className="top-products">
			<div className="wrapper">
				<h2 className="top-products-title">New Products & Bestsellers</h2>
				<Slider {...settings} className="top-products-container">
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct1} alt="" />
						</div>
						<p className="top-product-item-name">
							ALPINA MYTHOS 3.0 LE MTB helmet
						</p>
						<p className="top-product-item-price">$57,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct2} alt="" />
						</div>
						<p className="top-product-item-name">ION K_PACT Knee Protectors</p>
						<p className="top-product-item-price">$59,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct3} alt="" />
						</div>
						<p className="top-product-item-name">
							ROSE TRAIL Merino Jersey II Gravel Cycling Jersey
						</p>
						<p className="top-product-item-price">$79,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct4} alt="" />
						</div>
						<p className="top-product-item-name">FOX PAWTECTOR MTB Gloves</p>
						<p className="top-product-item-price">$31,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct5} alt="" />
						</div>
						<p className="top-product-item-name">
							VAUDE MEN'S ESCAPE BIKE LIGHT JACKET Rain Jacket
						</p>
						<p className="top-product-item-price">$74,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct6} alt="" />
						</div>
						<p className="top-product-item-name">GripGrab Summer Skull Cap</p>
						<p className="top-product-item-price">$18,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct7} alt="" />
						</div>
						<p className="top-product-item-name">
							ALPINA TRI EFFECT 2.0 Sports Glasses Set
						</p>
						<p className="top-product-item-price">$35,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct8} alt="" />
						</div>
						<p className="top-product-item-name">
							Sigma ROX 4.0 GPS Bike Computer HEART RATE SET
						</p>
						<p className="top-product-item-price">$84,90</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct9} alt="" />
						</div>
						<p className="top-product-item-name">
							ROSE Druckmacher GF-56 floor pump
						</p>
						<p className="top-product-item-price">$22,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct10} alt="" />
						</div>
						<p className="top-product-item-name">
							Kryptonite Evolution Series 4 Integrated Chain Lock
						</p>
						<p className="top-product-item-price">$59,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct11} alt="" />
						</div>
						<p className="top-product-item-name">
							Elite Fly Tex Drinking Bottle
						</p>
						<p className="top-product-item-price">$5,95</p>
					</div>
					<div className="top-product-box">
						<div className="top-product-item-img">
							<img src={topProduct12} alt="" />
						</div>
						<p className="top-product-item-name">
							ORTLIEB Back Roller Classic Pannier Bags - Pair
						</p>
						<p className="top-product-item-price">$124,95</p>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default TopProducts;
