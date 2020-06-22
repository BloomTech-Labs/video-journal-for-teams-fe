import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Charts from "../components/charts/Charts";

// Components
import NavAndHeader from "../components/nav/NavAndHeader";
import NoFeedback from "../components/ResultsComponents/NoFeedback";

// Redux
import { connect } from "react-redux";
import { fetchTeamById, fetchTeamMembers, fetchTeamVideos, clearError } from "../redux/actions/teamActions";
//socket
import { fetchVideoFeedback } from "../redux/actions/userActions";
import { formatFeedback } from "../components/utils/formatFeedback";
import { useDispatch } from "react-redux";
import AxiosWithAuth from "../components/utils/AxiosWithAuth";

function ResultsPage(props) {
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
		performance_score,
	} = props;
	const [data, setData] = useState();
	const [count, setCount] = useState(10);
	const dispatch = useDispatch();
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

	useEffect(() => {
		userId &&
			AxiosWithAuth()
				.get(`/v2/users/feedback/${userId}`)
				.then((res) => {
					dispatch(fetchVideoFeedback(res.data));
					setData(formatFeedback(res.data));
				})
				.catch((err) => console.log(err));
	}, []);

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
			<NavAndHeader>
				<div className="resultsPage">
					<h1>My Performance Results</h1>
					<p>
						Your overall performance score is an averaged score based on the feedback you receive from your peers as
						well as TeamReel’s automated performance score generator.
					</p>
					{performance_score && performance_score !== 0 ? (
						<div>
							<h2 style={{ marginTop: "3%", textAlign: "center", fontSize: "1.5rem" }}>
								Overall Score:
								{`${Number.isInteger(performance_score) ? performance_score : performance_score.toFixed(2)}/5`}
							</h2>
							<Charts />
						</div>
					) : (
						<NoFeedback />
					)}
				</div>
			</NavAndHeader>
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
	performance_score: state.User.userVideoFeedback.performance_score,
});

const mapActionsToProps = {
	fetchTeamById,
	fetchTeamMembers,
	clearError,
	fetchTeamVideos,
};

export default connect(mapStateToProps, mapActionsToProps)(ResultsPage);
