import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./pages/Header/Header";
import Bikes from "./pages/Bikes/Bikes";
import Clothing from "./pages/Clothing/Clothing";
import Basket from "./pages/Basket/Basket";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import BestsellerPage from "./pages/BestsellerPage/BestsellerPage";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const handleAddProduct = (product) => {
		const ProductExist = cartItems.find((item) => item.id === product.id);
		if (ProductExist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...ProductExist, quantity: ProductExist.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
	};

	const handleRemoveProduct = (product) => {
		const ProductExist = cartItems.find((item) => item.id === product.id);
		if (ProductExist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...ProductExist, quantity: ProductExist.quantity - 1 }
						: item
				)
			);
		}
	};

	const handleCartClearance = () => {
		setCartItems([]);
	};

	return (
		<>
			<Navbar cartItems={cartItems}></Navbar>
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route path="/" element={<Header></Header>}></Route>
				<Route
					path="/bikes"
					element={<Bikes handleAddProduct={handleAddProduct}></Bikes>}></Route>
				<Route
					path="/clothing"
					element={
						<Clothing handleAddProduct={handleAddProduct}></Clothing>
					}></Route>

				<Route
					path="/basket"
					element={
						<Basket
							cartItems={cartItems}
							handleAddProduct={handleAddProduct}
							handleRemoveProduct={handleRemoveProduct}
							handleCartClearance={handleCartClearance}></Basket>
					}></Route>

				<Route
					path="/bestseller"
					element={
						<BestsellerPage
							handleAddProduct={handleAddProduct}></BestsellerPage>
					}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
			</Routes>
			<Newsletter></Newsletter>
			<Footer></Footer>
		</>
	);
}

export default App;
