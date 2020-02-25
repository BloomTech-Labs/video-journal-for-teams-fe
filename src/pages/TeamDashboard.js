import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { Card } from "antd";

// Components
import NavAndHeader from "../components/nav/NavAndHeader";
import MembersList from "../components/team/MembersList";
import PromptVideoList from "../components/team/PromptVideoList";

// Redux 
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, fetchTeamVideos, clearError } from "../redux/actions/teamActions";

function TeamDashboard({ team, fetchTeamById, fetchTeamMembers, teamMembers, userId, teamError, isFetching, clearError }) {
	const [userRole, setUserRole] = useState();
	const [count, setCount] = useState(10);
	let { team_id } = useParams();
	const history = useHistory();

	useEffect(() => {
		clearError();
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

	// If there is a forbidden error
	if (!isFetching && teamError) {

		if (teamError.status === 403) {
			setTimeout(() => {
				if (count === 0) {
					clearTimeout();
				}
				setCount(count - 1);
			}, 1000);

			setTimeout(() => {
				// Redirect after 10 secs...
				history.push('/user-dashboard');
				clearTimeout();
				// clearError();
			}, 10000)

			// Display redirect message...
			return (
				<div style={{ textAlign: "center", fontSize: "18px", width: "100%" }}>
					<h1 style={{ fontSize: "36px" }}>Redirect</h1>
					<p>Uh oh! You are trying to access a page that you do not have permission to.</p>
					<p>You will be redirected in {count} secs...</p>
					<p>Or <Link to="/user-dashboard" onClick={() => clearError()}>click here</Link> to redirect immediately.</p>
				</div>
			)
		}
	} else {
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
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	teamError: state.Team.error,
	isFetching: state.Team.isFetching,
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos
});

const mapActionsToProps = {
	fetchTeamById,
	fetchTeamMembers,
	clearError,
	fetchTeamVideos
};

export default connect(mapStateToProps, mapActionsToProps)(TeamDashboard);
