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
import OrganizationTeams from "./pages/OrganizationTeams";
import OrganizationUsers from "./pages/OrganizationUsers";
import OktaLogin from "./components/okta/OktaLogin";
import { LoginCallback, ImplicitCallback, SecureRoute, Security } from "@okta/okta-react";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import LoadingView from "./components/utils/LoadingView";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/okta/Login";
import { socket as io } from "./socket/socket";

// Styles
import "./App.scss";
import "antd/dist/antd.css";
import "./userdash.css";
import { Alert } from "antd";

// Redux
import { connect } from "react-redux";
import { addToInvitedTeam } from "./redux/actions/userActions";
import Organization from "./components/organization/Organization";
import { useHistory } from "react-router-dom";
import GoogleRedirect from "./components/okta/GoogleRedirect";

function App(props) {
	const socket = io.connect();
	console.log("check 1", socket.connected);
	socket.on("connect", () => console.log("check 2", socket.connected));

	const { isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history, organization_id } = props;
	const appHistory = useHistory();

	const authRequired = () => {
		appHistory.push("/login");
	};

	useEffect(() => {
		if (isLogged && invited_team_id && invite_code && organization_id) {
			addToInvitedTeam(invited_team_id, userId, history, organization_id);
			history.push(`/teams/${invited_team_id}`);
		}
	}, [isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history]);

	return (
		<div className="app">
			<Route exact path="/implicit/callback" component={LoginCallback} />
			{/* {props.inviteError ? <Alert message={props.inviteError} type="error" /> : null} */}
			<Route exact path="/" component={Home} />
			<Route exact path="/google/callback" component={GoogleRedirect} />
			{/* <Route exact path="/login" component={Login} /> */}

			<Route exact path="/register" component={Register} />

			<Route exact path="/invite/:invite" component={Invite} />
			<SecureRoute exact path="/user-dashboard" component={UserDashboard} />
			<Route exact path="/login" component={Login} />

			<Route exact path="/videos/:id" component={VideoDetails} />

			<Route path="/profile" component={UserProfileDashboard} />

			<Route exact path="/teams/:team_id" component={TeamDashboard} />

			<Route exact path="/organizations/:organization_id/teams" component={OrganizationTeams} />

			<Route exact path="/organizations/:organization_id/users" component={OrganizationUsers} />

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
