import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";

import UserVideosCard from "../user/UserVideosCard.js";
import { fetchUserVideos } from '../../redux/actions/userActions';

const { Meta } = Card;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Card className="prompt-card">
			<div key={prompt.id}>
				<div className="prompt-container">
					<h3>{prompt.question}</h3>
					<p>{prompt.description}</p>
				</div>
				{/* Display videos array for a specific prompt */}
				<div className="userDashList">
					{prompt.videos.map((video) => (
						<UserVideosCard key={video.id} data={video} />
					))}
				</div>
			</div>
		</Card>
	);
};

export default withRouter(PromptCard);
