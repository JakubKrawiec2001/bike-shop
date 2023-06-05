import React from "react";
import "./Bikes.scss";
import { products } from "../../data/bikesData";

// ICONS
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

const Bikes = ({ handleAddProduct }) => {
	return (
		<section className="bikes">
			<div className="bikes-hero-bg">
				<div className="bikes-hero-shadow">
					<div className="bikes-section-text-box">
						<h1 className="bikes-section-title">
							Your Best Ride with MountRide
						</h1>
						<p className="bikes-section-text">Choose your bike</p>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<div className="bike-container">
					{products.map((product) => {
						return (
							<div className="bike-box">
								{product.sale ? (
									<span className="sale-product">-20%</span>
								) : null}

								<button
									className="bike-basket-btn"
									onClick={() => handleAddProduct(product)}>
									<AiOutlineShopping></AiOutlineShopping>
								</button>
								<img src={product.image} alt="" className="bike-box-img" />
								<div className="bike-box-body">
									<div className="bike-box-text">
										<p className="bike-box-name">{product.name}</p>
										<p
											className={
												product.sale
													? "bike-box-price sale-product-price"
													: "bike-box-price"
											}>
											${product.price}
										</p>
										{product.sale ? (
											<span className="sale-product-new-price">
												${product.sale}
											</span>
										) : null}
									</div>
									<BsBookmarkHeart className="bike-box-favourite"></BsBookmarkHeart>
									{/* <BsBookmarkHeartFill></BsBookmarkHeartFill> */}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Bikes;
