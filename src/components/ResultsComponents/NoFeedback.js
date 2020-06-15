import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Components
import NavAndHeader from "../nav/NavAndHeader";

// Redux
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, fetchTeamVideos, clearError } from "../../redux/actions/teamActions";

function NoFeedback(props) {
	const {
		team,
		hello,
		fetchTeamById,
		fetchTeamMembers,
		fetchTeamVideos,
		teamMembers,
		userId,
		newPrompt,
		teamError,
		isFetching,
		clearError,
	} = props;
	const [userRole, setUserRole] = useState();
	const [count, setCount] = useState(10);
	let { team_id } = useParams();
	const history = useHistory();
	let redirectTimer = null;
	let countTimer = null;

	// Check if there is an error on mount.
	useEffect(() => {
		if (!isFetching && teamError) {
			// If error status is forbidden, redirect user after 10 secs.
			if (teamError.status === 403) {
				redirectTimer = setTimeout(() => {
					// Redirect after 10 secs...
					clearTimeout(redirectTimer);
					history.push("/user-dashboard");
					clearError();
				}, 10000);
			}
		}

		// Cleanup set timout
		return () => {
			clearTimeout(redirectTimer);
			clearTimeout(countTimer);
		};
	}, [teamError]);

	const clearDataAfterRedirect = () => {
		clearError();
		clearTimeout(countTimer);
		clearTimeout(redirectTimer);
	};

	// If there is a forbidden error
	if (!isFetching && teamError) {
		if (teamError.status === 403) {
			countTimer = setTimeout(() => {
				setCount(count - 1);
			}, 1000);

			if (count === 0) {
				clearTimeout(countTimer);
			}
			// Display redirect message...
			return (
				<div style={{ textAlign: "center", fontSize: "18px", width: "100%" }}>
					<h1 style={{ fontSize: "36px" }}>Forbidden</h1>
					<p>Uh oh! You are trying to access a page that you do not have permission to.</p>
					<p>You will be redirected in {count} secs...</p>
					<p>
						Or{" "}
						<Link to="/user-dashboard" onClick={clearDataAfterRedirect}>
							click here
						</Link>{" "}
						to redirect immediately.
					</p>
				</div>
			);
		}
	} else {
		return (
			<div className="resultsPage">
				<h1>My Performance Results</h1>
				<h2>Sorry your Performance Results are not available yet, please check back later.</h2>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	teamError: state.Team.error,
	isFetching: state.Team.isFetching,
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos,
	newPrompt: state.Team.newPrompt,
});

const mapActionsToProps = {
	fetchTeamById,
	fetchTeamMembers,
	clearError,
	fetchTeamVideos,
};

export default connect(mapStateToProps, mapActionsToProps)(NoFeedback);
