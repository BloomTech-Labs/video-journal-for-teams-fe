import React, { useEffect } from "react";
import { Card, Button } from "antd";

const Home = () => {
	return (
		<header>
			<div className="mainbg"></div>
			<div className="cover"></div>
			<div className="header">
				<h1>Success Begins Here.</h1>
				<h2><strong>Your</strong> how-to site about how-to</h2>
			</div>
			<div className="tweentxt">
				<p><span className="logoEmbed">[how to]</span> is a community for people who like to make things.
			</p><p>Come explore, share, and make your next project with us!<br />
				</p>
			</div>
		</header>
	)
}

export default Home;