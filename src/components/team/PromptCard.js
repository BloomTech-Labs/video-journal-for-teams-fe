import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Card, Collapse, List, Divider } from "antd";
import "antd/dist/antd.css";
import UserVideosCard from "../user/UserVideosCard.js";

const { Panel } = Collapse;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Collapse className="prompt-item" key={prompt.id}>
			<Panel header={prompt.question} style={{ textAlign: "left" }}>
				<Divider className="prompt-desc-header" orientation="left">Description</Divider>
				<div className="prompt-desc">{prompt.description}</div>
				{/* Display videos array for a specific prompt */}
				<Divider orientation="left">Videos</Divider>
				<div className="card-flex">
					<Button
						type="primary"
						shape="round"
						size="large"
						icon="plus"
						href={`/teams/${props.teamId}/videos/post/${prompt.id}`}>
						Record
					</Button>

					{prompt.videos.map((video) => (
						<UserVideosCard key={video.id} data={video} />
					))}
				</div>
			</Panel>
		</Collapse >
	);
};

export default withRouter(PromptCard);
