import React, { useEffect } from "react";
import { connect } from "react-redux";

import NavAndHeader from "../components/nav/NavAndHeader";
import TeamList from "../components/user/UserTeamsList";
import Carousel from "../components/shared/Carousel";
import UserVideosCard from "../components/user/UserVideosCard";
import Organization from "../components/organization/Organization";

import { fetchUserVideos, loginUser } from "../redux/actions/userActions";
import { clearError } from "../redux/actions/teamActions";
import { useOktaAuth } from "@okta/okta-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserDashboard(props) {
	const { authService, authState } = useOktaAuth();
	const dispatch = useDispatch();
	const history = useHistory();

	const { id, fetchUserVideos, videos, clearError, organizations, defaultOrganization, selectedOrganization } = props;

	let organization_id = "";

	if (typeof selectedOrganization === "undefined" || typeof defaultOrganization === "undefined") {
		organization_id = "";
	} else {
		organization_id = selectedOrganization.id ? selectedOrganization.id : defaultOrganization.id;
	}

	useEffect(() => {
		authState.isAuthenticated &&
			authService.getUser().then((user) => {
				const creds = {
					username: user.preferred_username,
					email: user.email,
					first_name: user.given_name,
					last_name: user.family_name,
					password: user.sub,
				};
				dispatch(loginUser(creds));

				authService.getAccessToken().then((token) => localStorage.setItem("access-token", token));
			});
	}, []);

	useEffect(() => {
		clearError();
		if (organization_id !== "" && id) {
			fetchUserVideos(id, organization_id);
		}
	}, [id, organization_id, defaultOrganization, selectedOrganization]);

	return (
		<>
			{authState.isAuthenticated && (
				<NavAndHeader>
					<div className="user-dashboard dashboard">
						<h1 style={{ color: "#696969" }}>Dashboard</h1>
						{organizations.length >= 1 ? (
							<>
								<TeamList />
								<div className="dashboard-header">
									<h2>My&nbsp;Videos</h2>
								</div>
								<Carousel component={UserVideosCard} data={videos} name={"videos"} />{" "}
							</>
						) : (
							<Organization />
						)}
					</div>
				</NavAndHeader>
			)}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		username: state.User.username,
		videos: state.User.videos,
		id: state.User.userId,
		organizations: state.User.organizations,
		defaultOrganization: state.User.defaultOrganization,
		selectedOrganization: state.User.selectedOrganization,
	};
};

export default connect(mapStateToProps, { fetchUserVideos, clearError })(UserDashboard);
