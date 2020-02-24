import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card } from "antd";

// Components
import NavAndHeader from "../components/nav/NavAndHeader";
import MembersList from "../components/team/MembersList";
import PromptVideoList from "../components/team/PromptVideoList";

// Redux 
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, } from "../redux/actions/teamActions";

function TeamDashboard({team, fetchTeamById, fetchTeamMembers, teamMembers, userId}) {
	const [userRole, setUserRole] = useState();
	let { team_id } = useParams();

	useEffect(() => {
		fetchTeamById(team_id)
		fetchTeamMembers(team_id)
	}, [fetchTeamById, fetchTeamMembers, team_id]);

	// Sets the logged in user role for the team
	useEffect(() => {
		if (teamMembers.length > 0) {
			const findTeamMember = teamMembers.find((item) => (item.user_id === userId));
			findTeamMember ? setUserRole(findTeamMember.role_id) : setUserRole(1)
		}
	}, [teamMembers, userId])


	return (
		<NavAndHeader>
			<h1 style={{ marginLeft: "20px" }}>{team.name}</h1>
			<Card title="" style={{ margin: "20px" }}>
				<MembersList userRole={userRole} />
			</Card>
			{/* Diplay Prompts */}
			<Card title="" style={{ margin: "20px" }}>
				<PromptVideoList userRole={userRole} />
			</Card>
		</NavAndHeader>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	team: state.Team.team,
	teamMembers: state.Team.teamMembers
});

const mapActionsToProps = {
	fetchTeamById,
	fetchTeamMembers
};

export default connect(mapStateToProps, mapActionsToProps)(TeamDashboard);
