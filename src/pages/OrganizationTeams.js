import React, { useEffect } from "react";
import NavAndHeader from "../components/nav/NavAndHeader";
import TeamCard from "../components/user/UserTeamsCard";
import { fetchOrganizationTeams } from "../redux/actions/organizationActions";
import { connect } from "react-redux";

const OrganizationTeams = (props) => {
	const { defaultOrganization, selectedOrganization, fetchOrganizationTeams, organization_teams } = props;

	let organization_id = "";

	if (typeof selectedOrganization === "undefined" || typeof defaultOrganization === "undefined") {
		organization_id = "";
	} else {
		organization_id = selectedOrganization.id ? selectedOrganization.id : defaultOrganization.id;
	}

	useEffect(() => {
		console.log(organization_id);
		fetchOrganizationTeams(organization_id);
	}, [organization_id]);

	return (
		<NavAndHeader>
			<div class="user-dashboard dashboard">
				<h1>All Teams</h1>
				<div className="flexy">
					{organization_teams.map((team) => {
						return <TeamCard data={team} />;
					})}
				</div>
			</div>
		</NavAndHeader>
	);
};

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	organizations: state.User.organizations,
	defaultOrganization: state.User.defaultOrganization,
	selectedOrganization: state.User.selectedOrganization,
	organization_teams: state.Organization.teams,
});
const mapActionsToProps = {
	fetchOrganizationTeams,
};
export default connect(mapStateToProps, mapActionsToProps)(OrganizationTeams);
