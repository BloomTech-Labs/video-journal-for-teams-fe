import React, { useState } from "react";
import { Button, Card, Tag, Divider } from "antd";
import Alpaca from '../imgs/alpaca-logo.png';
import { useHistory, Link } from "react-router-dom";

const Home = () => {
	const [show, setShow] = useState(true);
	let history = useHistory();

	return (
		<header className="home">
			<div className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont" >Team&nbsp;Reels</h1>
				</div>
				<div className="links">
					<Link to="/login">Sign in</Link>
					<a onClick={() => setShow(!show)}>About us</a>
				</div>
				<div className="navStart">
						{/* <Button>Get Started</Button> */}
						<Button size="medium"
							// icon="caret-right"
							className="adding-button"
							onClick={
								(e) => {
									e.preventDefault();
									history.push("/register");
								}
							}>
							GET STARTED 
						</Button>
					</div>
			</div>
			
			
			<div style={{
				display: (show ? "inherit" : "none")
			}}
				className="header"
			>
				{/* <div className="logo">
					<img alt="Alpaca Vids Logo" className="alpaca-logo" src={Alpaca}></img>
				</div> */}
				<div className="text">
					<h1>Practice your speaking skills<br/>with your team <br/><h1 className="text-red">no matter where you are.</h1></h1>
					<h3>See how it works</h3>
					<div className="text-blobs">
						<div className="blob1">
							<h1>Join or create an organization</h1>
							<h2>You can start your own, or join an already existing organization.</h2>
						</div>
						<div className="blob2">
							<h1>Team up with others</h1>
							<h2>Team up with coworkers or classmates, and leave feedback on eachothers videos!</h2>
						</div>
						<div className="blob3">
							<h1>Create prompts for others to answer</h1>
							<h2>Channel leaders can create prompts for other teammates to answer and practice their speaking skills.</h2>
						</div>
						<div className="blob4">
							<h1>Improve your speaking skills!</h1>
							<h2>With TeamReels, you can answer prompts created by channel leaders every week, and get better through critical feedback and repitition!</h2>
						</div>
					</div>
					<div className="footNote">
						<h2>Ready to get started?</h2>
						<h4>We are ready for you to join the TeamReels community, click the button and get started now!</h4>
					</div>
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
							GET STARTED 
						</Button>
					</div>
				</div>
			</div>
			<div style={{ display: (show ? "none" : "inherit") }} className="header">
				<div className="TitleAndCards">
				<h1>Version One Team</h1>
				<Card size="small" className="box">
					<Card bordered className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM20RB9-672e81ad9979-512" />}>
						<h3>Darrin Lowery</h3><Tag>Web</Tag><Tag>BEST</Tag><Tag>10/10</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars0.githubusercontent.com/u/18246524?s=460&v=4" />}>
						<h3>Kerri-Ann Bates</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars2.githubusercontent.com/u/54912919?s=460&v=4" />}>
						<h3>Sam Allen</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars1.githubusercontent.com/u/8367070?s=460&v=4" />}>
						<h3>Sofia Levin</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars2.githubusercontent.com/u/13441400?s=460&v=4" />}>
						<h3>Michael Nunes</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UHV65B6UA-1eea077dbe2f-512" />}>
						<h3>Kyla Oyamot</h3><Tag>UX</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UJB5Y3VS4-52dc043b8f1e-512" />}>
						<h3>Marcus Jones</h3><Tag>Team Lead</Tag>
					</Card>
					<Card className="person" hoverable>
						<h3>Github</h3>
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank">Frontend</a>
						<br />
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank">Backend</a>
						<br /> 
						<a href="https://alpacavid-api-doc.netlify.com/" target="_blank">API Documentation</a>
						<Divider />
						<h3>Alpaca Drawing</h3>
						<p>DeLenn Lowery</p>
					</Card>
				</Card>
				</div>
			</div>
			
		</header>
	)
}

export default Home; 