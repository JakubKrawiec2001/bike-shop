import React from "react";
import "./Brands.scss";
import giantLogo from "../../assets/images/brands/giant.png";
import krossLogo from "../../assets/images/brands/kross.png";
import meridaLogo from "../../assets/images/brands/merida.png";
import rometLogo from "../../assets/images/brands/romet.png";
import scottLogo from "../../assets/images/brands/scott.png";
import trekLogo from "../../assets/images/brands/trek.png";

const Main = () => {
	return (
		<>
			<main className="main">
				<section className="brands">
					<div className="wrapper">
						{/* <h2 className="section-title">Featured Brands</h2> */}
						<div className="brands-container">
							<img className="brand" src={giantLogo} alt="" />
							<img className="brand" src={krossLogo} alt="" />
							<img className="brand" src={meridaLogo} alt="" />
							<img className="brand" src={rometLogo} alt="" />
							<img className="brand" src={scottLogo} alt="" />
							<img className="brand" src={trekLogo} alt="" />
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Main;
