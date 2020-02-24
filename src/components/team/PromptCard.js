import React from "react";
import { withRouter } from "react-router-dom";
import { Collapse, Divider } from "antd";
import UserVideosList from "../user/UserVideosList.js";

const { Panel } = Collapse;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Collapse className="prompt-item" bordered={false} defaultActiveKey={[props.index === 0 ? prompt.id : null]}>
			<Panel header={prompt.question} key={prompt.id} style={{ textAlign: "left" }}>
				<div className="prompt-desc">{prompt.description}</div>
				<Divider orientation="left">Videos</Divider>
				<UserVideosList />
			</Panel>
		</Collapse >
	);
};

export default withRouter(PromptCard);
