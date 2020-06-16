import React, { useState, useEffect } from "react";
import ReelImage from "../../imgs/image.png";

// Redux
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, fetchTeamVideos, clearError } from "../../redux/actions/teamActions";

function NoFeedback(props) {
	return (
		<div className="resultsPage">
			<img src={ReelImage} alt="Team Reel Logo" style={{ width: "20%", height: "auto" }} />
			<h2 style={{ fontSize: "1.5rem" }}>
				Sorry your Performance Results are not available yet, please check back later.
			</h2>
		</div>
	);
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	teamError: state.Team.error,
	isFetching: state.Team.isFetching,
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos,
	newPrompt: state.Team.newPrompt,
});

const mapActionsToProps = {
	fetchTeamById,
	fetchTeamMembers,
	clearError,
	fetchTeamVideos,
};

export default connect(mapStateToProps, mapActionsToProps)(NoFeedback);
