import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card } from "antd";

// Components
import NavAndHeader from "../components/nav/NavAndHeader";
import MembersList from "../components/team/MembersList";
import PromptVideoList from "../components/team/PromptVideoList";

// Redux 
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, fetchTeamVideos} from "../redux/actions/teamActions";

function TeamDashboard(props) {
	const [userRole, setUserRole] = useState();
	let { team_id } = useParams();

	useEffect(() => {
		props.fetchTeamById(team_id);
		props.fetchTeamMembers(team_id);
		props.fetchTeamVideos(team_id);
	}, [team_id, props.newPrompt]);

	// Sets the logged in user role for the team
	useEffect(() => {
		if (props.teamMembers.length > 0) {
			const findTeamMember = props.teamMembers.find((item) => (item.user_id === props.userId));
			findTeamMember ? setUserRole(findTeamMember.role_id) : setUserRole(1)
		}
	}, [props.teamMembers, props.userId])


	return (
		<NavAndHeader>
			<div className="team-dashboard dashboard">
				<h1>{props.team.name}</h1>
				<MembersList userRole={userRole} />
				<PromptVideoList userRole={userRole} />
			</div>
		</NavAndHeader>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos
});

const mapActionsToProps = {
	fetchTeamById,
	fetchTeamMembers,
	fetchTeamVideos
};

export default connect(mapStateToProps, mapActionsToProps)(TeamDashboard);
