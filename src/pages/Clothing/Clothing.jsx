import React, { useState } from "react";
import "./Clothing.scss";
import { products } from "../../data/clothingData";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

const Clothing = ({ handleAddProduct }) => {
	const [data, setData] = useState(products);

	const filterResult = (product) => {
		const result = products.filter((currentData) => {
			return currentData.category === product;
		});
		setData(result);
	};
	return (
		<section className="clothing">
			<div className="wrapper">
				<div className="clothing-category">
					<button
						className="clothing-category-btn"
						onClick={() => setData(products)}>
						All
					</button>
					<button
						className="clothing-category-btn"
						onClick={() => filterResult("Clothes")}>
						Clothes
					</button>
					<button
						className="clothing-category-btn"
						onClick={() => filterResult("Helmets")}>
						Helmets
					</button>
					<button
						className="clothing-category-btn"
						onClick={() => filterResult("Armor")}>
						Armor
					</button>
					<button
						className="clothing-category-btn"
						onClick={() => filterResult("Accessories")}>
						Accessories
					</button>
					<button
						className="clothing-category-btn"
						onClick={() => filterResult("Shoes")}>
						Shoes
					</button>
				</div>
				<p className="search-results">{products.length} search results</p>
				<div className="clothing-container">
					{data.map((product) => {
						return (
							<div className="clothing-box">
								<button
									className="clothing-basket-btn"
									onClick={() => handleAddProduct(product)}>
									<AiOutlineShopping></AiOutlineShopping>
								</button>
								<img src={product.image} alt="" className="clothing-box-img" />
								<div className="clothing-box-body">
									<div className="clothing-box-text">
										<p className="clothing-box-name">{product.name}</p>
										<p className="clothing-box-price">${product.price}</p>
										{product.sale ? (
											<span className="sale-product-new-price">
												${product.sale}
											</span>
										) : null}
									</div>
									<BsBookmarkHeart className="clothing-box-favourite"></BsBookmarkHeart>
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

export default Clothing;
