import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import "./components/utils/AxiosDefaults";

// Components
import PrivateRoute from "./components/utils/PrivateRoute";
import UploadProgress from "./components/PostTeamVideo/UploadVideo/UploadProgress";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import UserProfileDashboard from "./pages/UserProfileDashboard";
import UserVideos from "./pages/UserVideos";
import TeamDashboard from "./pages/TeamDashboard";
import VideoDetails from "./pages/VideoDetails";
import Invite from "./pages/Invite";
import Home from "./pages/Home";
import OrganizationTeams from "./pages/OrganizationTeams";
import OrganizationUsers from "./pages/OrganizationUsers";

// Styles
import "./App.scss";
import "antd/dist/antd.css";
import "./userdash.css";
import { Alert } from "antd";

// Redux
import { connect } from "react-redux";
import { addToInvitedTeam } from "./redux/actions/userActions";
import Organization from "./components/organization/Organization";

function App(props) {
	const { isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history, organization_id } = props;

	useEffect(() => {
		if (isLogged && invited_team_id && invite_code && organization_id) {
			addToInvitedTeam(invited_team_id, userId, history, organization_id);
			history.push(`/teams/${invited_team_id}`);
		}
	}, [isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history]);

	return (
		<div className="app">
			{props.inviteError ? <Alert message={props.inviteError} type="error" /> : null}
			<Route exact path="/" component={Home} />

			<Route exact path="/login" component={Login} />

			<Route exact path="/register" component={Register} />

			<Route exact path="/invite/:invite" component={Invite} />

			<PrivateRoute exact path="/user-dashboard" component={UserDashboard} />

			<PrivateRoute exact path="/videos/:id" component={VideoDetails} />

			<PrivateRoute path="/profile" component={UserProfileDashboard} />

			<PrivateRoute exact path="/teams/:team_id" component={TeamDashboard} />

			<PrivateRoute exact path="/organizations/:organization_id/teams" component={OrganizationTeams} />

			<PrivateRoute exact path="/organizations/:organization_id/users" component={OrganizationUsers} />

			<Route exact path="/videos" component={UserVideos} />

			<UploadProgress />
		</div>
	);
}

const mapStateToProps = (state) => ({
	invited_team_id: state.User.invite.invited_team_id,
	invite_code: state.User.invite.invite_code,
	userId: state.User.userId,
	isLogged: state.User.isLogged,
	inviteError: state.User.invite.error,
	organization_id: state.User.invite.invited_organization_id,
});

const mapActionsToProps = {
	addToInvitedTeam,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(App));
