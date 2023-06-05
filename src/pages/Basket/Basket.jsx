import React from "react";
import "./Basket.scss";

// ICONS
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Basket = ({
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
}) => {
	const totalPrice = cartItems.reduce(
		(price, item) => price + item.quantity * item.price,
		0
	);

	return (
		<section className="shopping-cart">
			<div className="wrapper">
				<h1 className="shopping-cart-title">Your shopping cart</h1>
				<div className="shopping-cart-container">
					{cartItems.length === 0 ? (
						<p className="no-item">No items are added in the cart</p>
					) : (
						<div className="shopping-cart-products-box">
							{cartItems.map((item) => {
								return (
									<>
										<div key={item.id} className="shopping-cart-product">
											<img
												src={item.image}
												alt=""
												className="shopping-cart-img"
											/>
											<div className="shopping-cart-product-text-box">
												<p className="shopping-cart-product-name">
													{item.name}
												</p>
												<p className="shopping-cart-product-price">
													${item.price}
												</p>
											</div>
											<div className="shopping-cart-quantity-box">
												<button
													className="shopping-cart-btn"
													onClick={() => handleRemoveProduct(item)}>
													<AiOutlineMinus></AiOutlineMinus>
												</button>
												<div className="shopping-cart-quantity">
													{item.quantity}
												</div>
												<button
													className="shopping-cart-btn"
													onClick={() => handleAddProduct(item)}>
													<AiOutlinePlus></AiOutlinePlus>
												</button>
											</div>
										</div>
									</>
								);
							})}

							<div className="shopping-cart-total-price-box">
								<div className="shopping-cart-total-price-text">
									<p className="shopping-cart-total-price-title">
										Total amount
									</p>
									<p className="shopping-cart-total-price">${totalPrice}</p>
								</div>
								<button className="btn" onClick={() => handleCartClearance()}>
									Clear All
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Basket;
