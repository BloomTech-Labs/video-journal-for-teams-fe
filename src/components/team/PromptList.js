import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";

//Redux
import { connect } from "react-redux";
import { createPrompt } from "../../redux/actions/teamActions";

//Components
import AddPromptModal from "./AddPromptModal.js";
import PromptCard from "./PromptCard.js";

//Styling
import { Layout, Button } from "antd";
const { Content } = Layout;

const PromptList = ({ createPrompt, teamPromptsAndVideos, teamId }) => {
	const [showModal, setShowModal] = useState(false);
	const { userRole } = useContext(UserContext)

	return (
		<Content className="prompts-list">
			<div className="dashboard-header">
				<h2>Prompts ({teamPromptsAndVideos.length})</h2>
				{userRole === 1 ? null : (
					<Button
						icon="plus"
						className="adding-button"
						onClick={() => setShowModal(true)}>
						Add Prompt
					</Button>
				)}
			</div>
			<AddPromptModal
				isVisible={showModal}
				setVisibility={setShowModal}
				createPrompt={createPrompt}
				teamId={teamId}
			/>
			{teamPromptsAndVideos.map((prompt, index) => (
				<PromptCard key={prompt.id} data={prompt} index={index} />
			))}
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
