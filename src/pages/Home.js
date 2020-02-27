import React, { useState } from "react";
import { Button } from "antd";
import Alpaca from '../imgs/alpaca-logo.png';
import { useHistory, Link } from "react-router-dom";

const Home = () => {
	const [show, setShow] = useState(false);
	let history = useHistory();

	return (
		<header className="home">
			<div className="mainbg">
			</div>
			<div className="cover"></div>
			<div className="header">
				<div className="logo">
					<img alt="Alpaca Vids Logo" className="alpaca-logo" src={Alpaca}></img>
				</div>
				<div style={{
					display: (show ? "block" : "none")
				}}
					className="text"
				>
					<h1>Success<br />Begins Here.</h1>
					<h2>Hone your presence,<br />land your dream job.</h2>
					<div className="start">
						{/* <Button>Get Started</Button> */}
						<Button size="large"
							// icon="caret-right"
							className="adding-button"
							onClick={
								(e) => {
									e.preventDefault();
									history.push("/register");
								}
							}>
							B E G I N
						</Button>
					</div>
				</div>
				<div style={{
					display: (show ? "none" : "block")
				}}
					className="text"
				>					<h1>Success<br />Begins Here.</h1>
				</div>

			</div>
			<div className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont" >Alpaca&nbsp;Vids</h1>
				</div>
				<div className="links">
					<Link to="/login">login</Link>
					<a onClick={() => setShow(!show)}>dev team</a>
				</div>
			</div>
		</header>
	)
}

export default Home; 