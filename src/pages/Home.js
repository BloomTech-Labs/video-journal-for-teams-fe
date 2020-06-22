import reel from "../imgs/image.png";
import teamReel from "../imgs/TeamReel.png";
import React, { useEffect } from "react";
import { Button } from "antd";
import { useHistory, Link, useLocation } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import UserVideos from "./UserVideos";
import { useSelector } from "react-redux";
//import { loginUser, setError, clearError } from "../redux/actions/userActions";

const Home = () => {
	const history = useHistory();
	const location = useLocation();
	const { authService, authState } = useOktaAuth();
	const userId = useSelector((state) => state.User.userId);

	useEffect(() => {
		authState.isAuthenticated && userId && history.push("/user-dashboard");
	}, [authState, userId]);

	return (
		<div>
			<header className="home">
				<div className="header">
					{/* NAVBAR */}
					<nav className="bar">
						<div className="title">
							<img src={teamReel} />
						</div>
						<div className="links">
							<Link to="/about">About us</Link>
							<Link to="/user-dashboard">Sign in</Link>

							<div className="navStart">
								<Button
									size="medium"
									className="adding-button"
									onClick={(e) => {
										e.preventDefault();
										history.push("/user-dashboard");
									}}>
									GET STARTED
								</Button>
							</div>
						</div>
					</nav>
					<div className="text">
						<div className="reel-logo">
							<h1 className="h1">
								Practice your speaking skills with your team,<h1 className="text-red">no matter where you are.</h1>
							</h1>
							<img src={reel} alt="film reel" />
						</div>

						<div className="arrow-down">
							<h2>See how it works</h2>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEllWShtKcvBMNtnWdF2oL1KqsMOYk_JEXH92BYh4Glmkw6m-K&usqp=CAU"
								alt="arrow down"
							/>
						</div>

						<div className="text-blobs">
							<div className="blob1">
								<div className="text">
									<h1>Join or create an organization</h1>
									<h2>You can start your own, or join an already existing<br/> organization.</h2>
								</div>
							</div>
							<div className="blob2">
								<div className="text">
									<h1>Team up with others</h1>
									<h2>Team up with coworkers or classmates, and leave<br/> feedback on eachothers videos!</h2>
								</div>
							</div>
							<div className="blob3">
								<div className="text">
									<h1>Create prompts for others to answer</h1>
									<h2>
										Channel leaders can create prompts for other teammates to<br/> answer and practice their speaking skills.
									</h2>
								</div>
							</div>
							<div className="blob4">
								<div className="text">
									<h1>Improve your speaking skills!</h1>
									<h2>
										With TeamReels, you can answer prompts created by channel<br/> leaders every week, and get better through
										critical feedback<br/> and repitition!
									</h2>
								</div>
							</div>

							<div className="footNote">
								<h1>Ready to get started?</h1>
								<h2>We are ready for you to join the TeamReels community, click the button and get started now!</h2>
								<div className="start">
									<Button
										size="large"
										className="adding-button"
										onClick={(e) => {
											e.preventDefault();
											history.push("/user-dashboard");
										}}>
										GET STARTED
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Home;
