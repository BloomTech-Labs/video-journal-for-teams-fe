import React, { useState, useEffect } from "react";

import { socket } from "../../socket/socket";

// Redux
import { connect } from "react-redux";

// Actions
import { fetchFeedback } from "../../redux/actions/userActions";

// Components
import FeedbackTable from "./FeedbackTable";
import FeedbackForm from "./FeedbackForm";

export function Feedback({ videoId, videoOwnerId, loggedInUserId, feedback, fetchFeedback, all }) {
	const [showFeedback, setShowFeedback] = useState(false);

	useEffect(() => {
		fetchFeedback(videoId);
		setShowFeedback(true);
	}, [videoOwnerId, fetchFeedback, loggedInUserId, videoId]);

	useEffect(() => {
		console.log("socket useeffect");

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
				<FeedbackTable feedback={feedback} />
				<FeedbackForm videoId={videoId} videoOwnerId={videoOwnerId} all={all} />;
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	all: state,
	loggedInUserId: state.User.userId,
	feedback: state.User.videoDetailFocus.feedback.entries,
});

const mapActionsToProps = {
	fetchFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(Feedback);
