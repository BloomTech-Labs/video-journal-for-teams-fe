import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import {
	PlusOutlined
  } from '@ant-design/icons';

//Redux
import { connect } from "react-redux";
import { createPrompt } from "../../redux/actions/teamActions";

//Components
import AddPromptModal from "./AddPromptModal.js";
import PromptCard from "./PromptCard.js";

//Styling
import { Layout, Button, Empty } from "antd";
const { Content } = Layout;

const PromptList = ({ createPrompt, teamPromptsAndVideos, teamId, fetchTeamVideos, teamMembersEmail}) => {
	const [showModal, setShowModal] = useState(false);
	const { userRole } = useContext(UserContext)

	return (
		<Content className="prompts-list">
			<div className="dashboard-header">
				<h2>Prompts ({teamPromptsAndVideos.length})</h2>
				{userRole === 1 ? null : (
					// <Button
					// 	icon="plus"
					// 	className="adding-button"
					// 	style={{backgroundColor:"#6954EA", color:"white", border:"none"}}
					// 	onClick={() => setShowModal(true)}>
					// 	Add Prompt
					// </Button>
					<PlusOutlined onClick={() => setShowModal(true)} style={{fontSize:"1.6rem", color:"#6954EA"}}/>
				)}
			</div>
			<AddPromptModal
				isVisible={showModal}
				setVisibility={setShowModal}
				createPrompt={createPrompt}
				teamId={teamId}
				teamMembersEmail={teamMembersEmail}
			/>
			{teamPromptsAndVideos.length > 0
			? teamPromptsAndVideos.map((prompt, index) => (<PromptCard key={prompt.id} data={prompt} index={index} />))
			: <Empty />
		}
		</Content>
	);
};

const mapStateToProps = (state) => ({
	teamId: state.Team.team.id,
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos
});

const mapActionsToProps = {
	createPrompt
};

export default connect(mapStateToProps, mapActionsToProps)(PromptList);
