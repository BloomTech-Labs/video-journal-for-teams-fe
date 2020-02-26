import React, { useEffect } from "react";
import { Typography } from "antd";
import Alpaca from '../imgs/alpaca-logo.png';

const { Title } = Typography;


const Home = () => {
	return (
		<header className="home">
			<div className="mainbg">
			</div>
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
			<div className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont" >Alpaca&nbsp;Vids</h1>
				</div>

				<div className="links">
					<p>team</p>
					<p>github</p>
				</div>

			</div>
		</header>
	)
}

export default Home; 