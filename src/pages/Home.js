import React, { useEffect } from "react";
import { Typography, Button, Popover, Card } from "antd";
import Alpaca from '../imgs/alpaca-logo.png';
import { useHistory, Link } from "react-router-dom";

const { Title } = Typography;


const Home = () => {
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
				<div className="text">
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

			</div>
			<div className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont" >Alpaca&nbsp;Vids</h1>
				</div>
				<div className="links">
					<Link to="/login">login</Link>
					<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe">github</a>
				</div>
			</div>
		</header>
	)
}

export default Home; 