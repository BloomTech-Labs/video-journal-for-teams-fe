import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Layout, Card } from 'antd';
import MembersList from './MembersList';
import PromptVideoList from './PromptVideoList';
import DashboardHeader from '../DashboardHeader';
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, } from "../../redux/actions/teamActions";

function TeamDashboardContent(props) {
	const [userRole, setUserRole] = useState();
	let { team_id } = useParams();

	useEffect(() => {
		props.fetchTeamById(team_id)
		props.fetchTeamMembers(team_id)
		const findTeamMember = props.teamMembers.find((item) => (item.user_id = props.userId));
		setUserRole(findTeamMember.role_id);
	}, [props.teamMembers]);


	return (
		<Layout>
			<DashboardHeader />
			{/* Display Members */}
			<div>
				<h1 style={{ marginLeft: "20px" }}>{props.team.name}</h1>
				<Card title="" style={{ margin: "20px" }}>
					<MembersList userRole={userRole} />
				</Card>
				{/* Diplay Prompts */}
				<Card title="" style={{ margin: "20px" }}>
					<PromptVideoList userRole={userRole} />
				</Card>
			</div>
		</Layout>
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

export default connect(mapStateToProps, mapActionsToProps)(TeamDashboardContent);
