import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Components
import NavAndHeader from "../components/nav/NavAndHeader";
import MembersList from "../components/team/MembersList";
import PromptVideoList from "../components/team/PromptVideoList";

// Redux 
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, fetchTeamVideos} from "../redux/actions/teamActions";

function TeamDashboard({team, fetchTeamById, fetchTeamMembers, teamMembers, userId}) {
	const [userRole, setUserRole] = useState();
	let { team_id } = useParams();

	useEffect(() => {
		fetchTeamById(team_id);
		fetchTeamMembers(team_id);
		fetchTeamVideos(team_id);
	}, [team_id, fetchTeamById, fetchTeamMembers]);

	// Sets the logged in user role for the team
	useEffect(() => {
		if (teamMembers.length > 0) {
			const findTeamMember = teamMembers.find((item) => (item.user_id === userId));
			findTeamMember ? setUserRole(findTeamMember.role_id) : setUserRole(1)
		}
	}, [teamMembers, userId])


	return (
		<NavAndHeader>
			<div className="team-dashboard dashboard">
				<h1>{team.name}</h1>
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
