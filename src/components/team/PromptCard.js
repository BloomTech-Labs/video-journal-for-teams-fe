import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Collapse, List } from "antd";
import "antd/dist/antd.css";

import UserVideosCard from "../user/UserVideosCard.js";
import { fetchUserVideos } from '../../redux/actions/userActions';

const { Meta } = Card;
const { Panel } = Collapse;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Collapse className="prompt-card">
			<Panel header={prompt.question} style={{ textAlign: "left" }}>

				<div key={prompt.id}>
					<List
						bordered
						dataSource={[prompt.description]}
						renderItem={(item) => (
							<List.Item>{item}</List.Item>
						)}
					/>
					{/* Display videos array for a specific prompt */}
					<div className="userDashList">
						{prompt.videos.map((video) => (
							<UserVideosCard key={video.id} data={video} />
						))}
					</div>
				</div>
			</Panel>
		</Collapse>
	);
};

export default withRouter(PromptCard);
