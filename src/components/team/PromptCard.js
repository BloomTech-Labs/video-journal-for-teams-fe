import React from "react";
import { withRouter } from "react-router-dom";
import { Collapse } from "antd";
import TeamVideoList from "./TeamVideoList";

const { Panel } = Collapse;

const PromptCard = (props) => {
	const prompt = props.data;

	return (
		<Collapse className="prompt-item" bordered={false}
			defaultActiveKey={[props.index === 0 ? prompt.id : null]}
		>
			<Panel header={prompt.question} key={prompt.id} style={{ textAlign: "left" }}>
				<div className="prompt-desc">{prompt.description}</div>
				<p>{prompt.created_at}</p>
				<TeamVideoList promptId={prompt.id} videos={prompt.videos} />
			</Panel>
		</Collapse >
	);
};

export default withRouter(PromptCard);
