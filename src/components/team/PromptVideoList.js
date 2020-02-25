import React, { useState } from "react";

//Redux
import { connect } from "react-redux";
import { createPrompt, setError, clearError } from "../../redux/actions/teamActions";

//Components
import AddPromptModal from "./AddPromptModal.js";
import PromptCard from "./PromptCard.js";

//Styling
import { Layout, Button, Divider } from "antd";
import "./teamTest.css";
const { Content } = Layout;

const PromptVideoList = ({ createPrompt, teamPromptsAndVideos, userRole, teamId }) => {
	// #region CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
	const [showModal, setShowModal] = useState(false);
	// let { team_id } = useParams();

	// useEffect(() => {
	// 	fetchTeamVideos(team_id);
	// }, [team_id, newPrompt, fetchTeamVideos]);

	//#endregion CLICK TO UNCOLLAPSE COMPONENT LOGIC

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
	newPrompt: state.Team.newPrompt,
	teamId: state.Team.team.id,
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos
});

const mapActionsToProps = {
	createPrompt,
	setError,
	clearError,
};

export default connect(mapStateToProps, mapActionsToProps)(PromptVideoList);
