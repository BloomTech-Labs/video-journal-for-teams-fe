import React, { useEffect } from "react";
import { Card, Button } from "antd";
import Alpaca from '../imgs/alpaca-logo.png';


const Home = () => {
	return (
		<header className="home">
			<div className="mainbg"></div>
			<div className="cover"></div>
			<div className="header">
				<div className="logo">
					<img alt="Alpaca Vids Logo" className="alpaca-logo" src={Alpaca}></img>
				</div>
				<div className="text">
					<h1>Success<br />Begins Here.</h1>
					<h2>Hone your presence,<br />land your dream job.</h2>
				</div>
			</div>
		</header>
	)
}

export default Home;