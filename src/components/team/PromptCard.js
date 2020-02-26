import React from "react";
import { withRouter } from "react-router-dom";
import { Collapse } from "antd";
import TeamVideoList from "./TeamVideoList";
import { humanDate } from "../utils/HumanDate";

const { Panel } = Collapse;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Collapse className="prompt-item" bordered={false}
			defaultActiveKey={[props.index === 0 ? prompt.id : null]}
		>
			<Panel header={prompt.question} key={prompt.id} style={{ textAlign: "left" }} extra={humanDate(prompt.created_at)}>
				<div className="prompt-desc">{prompt.description}</div>
				<TeamVideoList promptId={prompt.id} videos={prompt.videos} />
			</Panel>
		</Collapse >
	);
};

export default withRouter(PromptCard);
