import React from "react";
import "./BestsellerPage.scss";
import { HiOutlineStar } from "react-icons/hi";
import { product } from "../../data/bestsellerData";

// IMAGES
import bestseller2 from "../../assets/images/bestseller-bg-2.jpg";
import bestseller3 from "../../assets/images/bestseller-bg-3.jpg";
import bestseller4 from "../../assets/images/bestseller-bg-4.jpg";

const BestsellerPage = ({ handleAddProduct }) => {
	return (
		<section className="bestseller-page">
			{product.map((product) => {
				return (
					<>
						<div className="bestseller-page-l">
							<img
								src={product.image}
								alt=""
								className="bestseller-page-l-img"
							/>
						</div>
						<div className="bestseller-page-r">
							<div className="bestseller-page-text-box">
								<p className="bestseller-page-bike-name">{product.name}</p>
								<p className="bestseller-page-bike-limited">Limited Edition</p>
								<p className="bestseller-page-bike-price">${product.price}</p>
								<span className="bestseller-page-bike-rate">
									<HiOutlineStar></HiOutlineStar>
									<HiOutlineStar></HiOutlineStar>
									<HiOutlineStar></HiOutlineStar>
									<HiOutlineStar></HiOutlineStar>
									<HiOutlineStar></HiOutlineStar>
								</span>
								<p className="bestseller-page-bike-description">
									The Gallio Force AXS is ultralight, blazing fast, and delivers
									a super-smooth ride. This racing road bike is built around an
									800 Series OCLV Carbon frame with new IsoFlow technology that
									improves aerodynamics, reduces weight and smooths the road.
									It's equipped with 100% premium parts like a wireless Shimano
									Dura-Ace Di2 drivetrain and high-profile carbon wheels for
									even greater aerodynamic benefits.
								</p>
								<div className="bestseller-page-bike-img-box">
									<img
										src={bestseller2}
										alt=""
										className="bestseller-page-bike-img"
									/>
									<img
										src={bestseller3}
										alt=""
										className="bestseller-page-bike-img"
									/>
									<img
										src={bestseller4}
										alt=""
										className="bestseller-page-bike-img"
									/>
								</div>
							</div>
							<button
								className="bestseller-page-btn"
								onClick={() => handleAddProduct(product)}>
								ADD TO CART
							</button>
						</div>
					</>
				);
			})}
		</section>
	);
};

export default BestsellerPage;
