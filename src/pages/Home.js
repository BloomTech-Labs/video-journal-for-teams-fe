import React, { useState, useEffect } from "react";
import { Button, Card, Tag, Divider } from "antd";
import Alpaca from "../imgs/alpaca-logo.png";
import { useHistory, Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { loginUser, setError, clearError } from "../redux/actions/userActions";

const Home = () => {
	const [show, setShow] = useState(true);
	let history = useHistory();
	const { authService, authState } = useOktaAuth();
	console.log(authService);

	useEffect(() => {
		authState.isAuthenticated ? history.push("/user-dashboard") : history.push("/");
	}, [authState]);

	return (
		<header className="home">
			<div className="mainbg"></div>
			<div className="cover"></div>
			<div
				style={{
					display: show ? "inherit" : "none",
				}}
				className="header">
				<div className="logo">
					<img alt="Alpaca Vids Logo" className="alpaca-logo" src={Alpaca}></img>
				</div>
				<div className="text">
					<h1>
						Success
						<br />
						Begins Here.
					</h1>
					<h2>
						Hone your presence,
						<br />
						land your dream job.
					</h2>
					<div className="start">
						{/* <Button>Get Started</Button> */}
						<Button
							size="large"
							// icon="caret-right"
							className="adding-button"
							onClick={(e) => {
								e.preventDefault();
								history.push("/register");
							}}>
							B E G I N
						</Button>
					</div>
				</div>
			</div>
			<div style={{ display: show ? "none" : "inherit" }} className="header">
				<Card size="small" className="box">
					<Card
						bordered
						className="person"
						hoverable
						cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM20RB9-672e81ad9979-512" />}>
						<h3>Darrin Lowery</h3>
						<Tag>Web</Tag>
						<Tag>BEST</Tag>
						<Tag>10/10</Tag>
					</Card>
					<Card
						className="person"
						hoverable
						cover={<img src="https://avatars0.githubusercontent.com/u/18246524?s=460&v=4" />}>
						<h3>Kerri-Ann Bates</h3>
						<Tag>Web</Tag>
					</Card>
					<Card
						className="person"
						hoverable
						cover={<img src="https://avatars2.githubusercontent.com/u/54912919?s=460&v=4" />}>
						<h3>Sam Allen</h3>
						<Tag>Web</Tag>
					</Card>
					<Card
						className="person"
						hoverable
						cover={<img src="https://avatars1.githubusercontent.com/u/8367070?s=460&v=4" />}>
						<h3>Sofia Levin</h3>
						<Tag>Web</Tag>
					</Card>
					<Card
						className="person"
						hoverable
						cover={<img src="https://avatars2.githubusercontent.com/u/13441400?s=460&v=4" />}>
						<h3>Michael Nunes</h3>
						<Tag>Web</Tag>
					</Card>
					<Card
						className="person"
						hoverable
						cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UHV65B6UA-1eea077dbe2f-512" />}>
						<h3>Kyla Oyamot</h3>
						<Tag>UX</Tag>
					</Card>
					<Card
						className="person"
						hoverable
						cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UJB5Y3VS4-52dc043b8f1e-512" />}>
						<h3>Marcus Jones</h3>
						<Tag>Team Lead</Tag>
					</Card>
					<Card className="person" hoverable>
						<h3>Github</h3>
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank">
							Frontend
						</a>
						<br />
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank">
							Backend
						</a>
						<br />
						<a href="https://alpacavid-api-doc.netlify.com/" target="_blank">
							API Documentation
						</a>
						<Divider />
						<h3>Alpaca Drawing</h3>
						<p>DeLenn Lowery</p>
					</Card>
				</Card>
			</div>
			<div className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont">Alpaca&nbsp;Vids</h1>
				</div>
				<div className="links">
					<Link to="/login">login</Link>
					<a onClick={() => setShow(!show)}>dev team</a>
				</div>
			</div>
		</header>
	);
};

export default Home;
