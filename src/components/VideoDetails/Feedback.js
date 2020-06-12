import React, { useState, useEffect } from "react";

import { socket } from "../../socket/socket";
import starRating from "./FeedbackRating.js";

// Redux
import { connect } from "react-redux";

// Actions
import { fetchFeedback } from "../../redux/actions/userActions";

// Components
import FeedbackTable from "./FeedbackTable";

import QuestionsForm from "./QuestionsForm";

export function Feedback({ videoId, videoOwnerId, loggedInUserId, feedback, fetchFeedback }) {
	const [showFeedback, setShowFeedback] = useState(false);

	useEffect(() => {
		fetchFeedback(videoId);
		setShowFeedback(true);
	}, [videoOwnerId, fetchFeedback, loggedInUserId, videoId]);

	useEffect(() => {
		socket.on("insertedFeedback", () => {
			fetchFeedback(videoId);
			setShowFeedback(true);
		});
	}, []);

	if (loggedInUserId === videoOwnerId) {
		return <FeedbackTable feedback={feedback} />;
	} else {
		return (
			<>
				<div style={{ textAlign: "center", margin: "2% 0" }}>
					<QuestionsForm videoId={videoId} videoOwnerId={videoOwnerId} />
				</div>
				<FeedbackTable feedback={feedback} />
			</>
		);
	}
}
//
const mapStateToProps = (state) => ({
	loggedInUserId: state.User.userId,
	feedback: state.User.videoDetailFocus.feedback.entries,
});

const mapActionsToProps = {
	fetchFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(Feedback);
