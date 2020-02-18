import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card } from "antd";

// Components
import NavAndHeader from "../components/NavAndHeader";
import MembersList from "../components/team/MembersList";
import PromptVideoList from "../components/team/PromptVideoList";

// Redux 
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, } from "../redux/actions/teamActions";

function TeamDashboard(props) {
	const [userRole, setUserRole] = useState();
  let { team_id } = useParams();

	useEffect(() => {
		props.fetchTeamById(team_id)
		props.fetchTeamMembers(team_id)
	}, []);

  // Sets the logged in user role for the team
	useEffect(() => {
		if (props.teamMembers.length > 0) {
      const findTeamMember = props.teamMembers.find((item) => (item.user_id === props.userId));
      findTeamMember ? setUserRole(findTeamMember.role_id) : setUserRole(1)
		}
	}, [props.teamMembers, props.userId])


	return (
    <NavAndHeader>
				<h1 style={{ marginLeft: "20px" }}>{props.team.name}</h1>
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
