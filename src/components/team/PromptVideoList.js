import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { fetchTeamVideos, createPrompt, setError, clearError } from "../../redux/actions/teamActions";


//Components
import AddPromptModal from "./AddPromptModal.js";
import PromptCard from "./PromptCard.js";

//Styling
import { Layout, Button, Divider } from "antd";
import "./teamTest.css";
const { Content } = Layout;

const PromptVideoList = ({fetchTeamVideos, newPrompt, createPrompt, teamPromptsAndVideos, userRole, teamId}) => {
	// #region CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
	const [showModal, setShowModal] = useState(false);
	let { team_id } = useParams();

	useEffect(() => {
		fetchTeamVideos(team_id);
	}, [team_id, newPrompt, fetchTeamVideos]);

	//#endregion CLICK TO UNCOLLAPSE COMPONENT LOGIC
	if (!teamPromptsAndVideos) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<Content>
				<h1>Prompts({teamPromptsAndVideos.length})</h1>
				{userRole === 1 ? null : (
					<Button
						type="primary"
						shape="round"
						icon="plus"
						className="adding-button"
						onClick={() => setShowModal(true)}>
						New Prompt
					</Button>
				)}
				<Divider />
				<AddPromptModal
					isVisible={showModal}
					setVisibility={setShowModal}
					createPrompt={createPrompt}
					teamId={teamId}
				/>
				{teamPromptsAndVideos.map((prompt) => (
					<PromptCard key={prompt.id} data={prompt} teamId={teamId} />
				))}
			</Content>
		);
	}
};

const mapStateToProps = (state) => ({
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos,
	newPrompt: state.Team.newPrompt,
	teamId: state.Team.team.id,
});

const mapActionsToProps = {
	fetchTeamVideos,
	createPrompt,
	setError,
	clearError,
};

export default connect(mapStateToProps, mapActionsToProps)(PromptVideoList);
