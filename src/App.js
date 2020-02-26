import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import "./components/utils/AxiosDefaults";

// Components
import PrivateRoute from "./components/utils/PrivateRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import UserProfileDashboard from "./pages/UserProfileDashboard";
import UserVideos from "./pages/UserVideos";
import TeamDashboard from "./pages/TeamDashboard";
import VideoDetails from "./pages/VideoDetails";
import Invite from "./pages/Invite";
import PostTeamVideo from "./pages/PostTeamVideo";

// Styles
import "./App.scss";
import "antd/dist/antd.css";
import "./userdash.css";
import { Alert } from "antd";

// Redux
import { connect } from "react-redux";
import { addToInvitedTeam } from "./redux/actions/userActions";

function App(props) {
	const { isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history } = props;

	useEffect(() => {
		if (isLogged && invited_team_id && invite_code) {
			addToInvitedTeam(invited_team_id, userId, history);
		}
	}, [isLogged, invited_team_id, invite_code, addToInvitedTeam, userId, history]);

	return (
		<div className="app">
			{props.inviteError ? <Alert message={props.inviteError} type="error" /> : null}
			<Route exact path="/" component={Login} />

			<Route exact path="/register" component={Register} />

			<Route exact path="/invite/:invite" component={Invite} />

			<PrivateRoute exact path="/user-dashboard" component={UserDashboard} />

			<PrivateRoute exact path="/videos/:id" component={VideoDetails} />

			<PrivateRoute path="/profile" component={UserProfileDashboard} />

			<PrivateRoute exact path="/teams/:team_id" component={TeamDashboard} />

			<PrivateRoute exact path="/teams/:team_id/videos/post/:prompt_id" component={PostTeamVideo} />

			<Route exact path="/videos" component={UserVideos} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	invited_team_id: state.User.invite.invited_team_id,
	invite_code: state.User.invite.invite_code,
	userId: state.User.userId,
	isLogged: state.User.isLogged,
	inviteError: state.User.invite.error,
});

const mapActionsToProps = {
	addToInvitedTeam,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(App));
