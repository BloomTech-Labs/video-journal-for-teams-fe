import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Collapse, List, Divider } from "antd";
import "antd/dist/antd.css";

import UserVideosCard from "../user/UserVideosCard.js";
import Carousel from "../shared/Carousel";

const { Panel } = Collapse;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Collapse className="prompt-item" bordered={false} defaultActiveKey={[props.index === 0 ? prompt.id : null]}>
			<Panel header={prompt.question} key={prompt.id} style={{ textAlign: "left" }}>
				<div className="prompt-desc">{prompt.description}</div>
				<Divider orientation="left">Videos</Divider>
				<Carousel data={prompt.videos} component={UserVideosCard} />
			</Panel>
		</Collapse>
	);
};

export default withRouter(PromptCard);
