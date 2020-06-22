import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import "./components/utils/AxiosDefaults";

// Components
import PrivateRoute from "./components/utils/PrivateRoute";
import UploadProgress from "./components/PostTeamVideo/UploadVideo/UploadProgress";

// Pages
// import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import UserProfileDashboard from "./pages/UserProfileDashboard";
import UserVideos from "./pages/UserVideos";
import TeamDashboard from "./pages/TeamDashboard";
import VideoDetails from "./pages/VideoDetails";
import Invite from "./pages/Invite";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OrganizationTeams from "./pages/OrganizationTeams";
import OrganizationUsers from "./pages/OrganizationUsers";
import Results from "./pages/Results";
import { LoginCallback, SecureRoute, useOktaAuth } from "@okta/okta-react";
import Login from "./components/okta/Login";
import InviteRedirect from "./pages/InviteRedirect";
import Chart from "./components/charts/Charts";
import { loginUser } from "./redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

// Styles
import "./App.scss";
import "antd/dist/antd.css";
import "./userdash.css";
import { Alert } from "antd";

// Redux
import { connect } from "react-redux";
import { addToInvitedTeam } from "./redux/actions/userActions";
import Organization from "./components/organization/Organization";
import GoogleRedirect from "./components/okta/GoogleRedirect";
import io from "socket.io-client";

function App(props) {
	const { isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history, organization_id } = props;
	const { authState, authService } = useOktaAuth();
	const dispatch = useDispatch();
	const err = useSelector((state) => state.User.error);

	// useEffect(() => {
	// 	if (isLogged && err && err.status === 401 && token && userInfo) {
	// 		console.log("$$$", isLogged, err, err.status, token, userInfo);
	// 		console.log("token error fired");
	// 		authService.logout("/");
	// 	}
	// }, [token, err, userInfo, isLogged]);

	const invite_info = JSON.parse(sessionStorage.getItem("team_invite"));
	useEffect(() => {
		// if (authState.isAuthenticated) {
		// 	authService.getUser().then((user) => {
		// 		const creds = {
		// 			username: user.preferred_username,
		// 			email: user.email,
		// 			first_name: user.given_name,
		// 			last_name: user.family_name,
		// 			password: user.sub,
		// 		};
		// 		dispatch(loginUser(creds));

		// 		authService.getAccessToken().then((token) => localStorage.setItem("access-token", token));
		// 	});
		// // } else if (!authState.isAuthenticated && !authState.isPending) {
		// // 	localStorage.clear();
		// // 	history.push("/");
		// // }

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
	}, [authState.isAuthenticated]);

	useEffect(() => {
		if (isLogged && invite_info && invite_info.org_id && invite_info.team_id) {
			addToInvitedTeam(invite_info.team_id, userId, history, invite_info.org_id);
			sessionStorage.removeItem("team_invite");
			history.push(`/teams/${invite_info.team_id}`);
		}
	}, [isLogged, invited_team_id, organization_id, invite_code, addToInvitedTeam, userId, history]);

	return (
		<div className="app">
			<Route exact path="/implicit/callback" component={LoginCallback} />
			{/* {props.inviteError ? <Alert message={props.inviteError} type="error" /> : null} */}
			<Route exact path="/" component={Home} />

			<Route path="/about" component={AboutUs} />
			<Route exact path="/invite-redirect" component={InviteRedirect} />
			<Route exact path="/charts" component={Chart} />

			<Route exact path="/login" component={Login} />
			<Route exact path="/google/callback" component={GoogleRedirect} />
			{/* <Route exact path="/login" component={Login} /> */}

			<Route exact path="/register" component={Register} />

			<Route exact path="/invite/:invite" component={Invite} />
			<SecureRoute exact path="/user-dashboard" component={UserDashboard} />
			<Route exact path="/login" component={Login} />

			<SecureRoute exact path="/videos/:id" component={VideoDetails} />

			<SecureRoute path="/profile" component={UserProfileDashboard} />

			<SecureRoute exact path="/teams/:team_id" component={TeamDashboard} />

			<SecureRoute exact path="/organizations/:organization_id/teams" component={OrganizationTeams} />

			<SecureRoute exact path="/organizations/:organization_id/users" component={OrganizationUsers} />

			<SecureRoute exact path="/videos" component={UserVideos} />

			<SecureRoute exact path="/results" component={Results} />

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
