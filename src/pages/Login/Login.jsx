import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { userSchema } from "../../utils/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ICONS
import { BsArrowLeft } from "react-icons/bs";
// IMAGES
import popupImg from "../../assets/images/login-popup.png";

const Login = () => {
	const [popup, setPopup] = useState("popup");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userSchema),
	});

	const showPopup = () => {
		if (popup) {
			setPopup("popup open-popup");
		} else {
			setPopup("popup");
		}
		setTimeout(() => {
			setPopup("popup");
		}, 2000);
	};

	const onSubmit = (data) => {
		showPopup();
	};

	return (
		<>
			<div className={popup}>
				<img src={popupImg} alt="" />
				<p>Login was successful</p>
			</div>
			<section className="login">
				<Link to="/">
					<button className="back-to-home-btn">
						<BsArrowLeft></BsArrowLeft>
					</button>
				</Link>
				<div className="login-container">
					<div className="login-panel-1">
						<h1 className="login-panel-welcome">WELCOME</h1>
						<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
							<input
								className="login-panel-input"
								type="text"
								placeholder="Username"
								{...register("name")}
							/>
							<span className="login-error">{errors.name?.message}</span>
							<input
								className="login-panel-input"
								type="password"
								placeholder="Password"
								{...register("password")}
							/>
							<span className="login-error">{errors.password?.message}</span>
							<button type="submit" className="sign-in-btn">
								SIGN IN
							</button>
						</form>
						<div className="login-panel-1-remember-box">
							<div className="checkbox-box">
								<input type="checkbox" />
								<p className="checkbox-text">Remember Me</p>
							</div>
							<button className="forgot-password-btn">Forgot Password</button>
						</div>
					</div>
					<div className="login-panel-2">
						<p className="login-panel-2-text">-Or Sign In With-</p>
						<div className="login-panel-2-btn-box">
							<button className="sign-in-with-btn">Facebook</button>
							<button className="sign-in-with-btn">Google</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
