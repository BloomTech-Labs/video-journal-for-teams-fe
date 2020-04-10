import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import { fetchFeedback } from "../../redux/actions/userActions";

// Components
import FeedbackTable from "./FeedbackTable";
import FeedbackForm from "./FeedbackForm";

export function Feedback({ videoId, videoOwnerId, loggedInUserId, feedback, fetchFeedback }) {
	const [showFeedback, setShowFeedback] = useState(false);

	useEffect(() => {
		//If viewer is video uploader, show the feedback for the video. Otherwise just show a feedback form
		if (loggedInUserId === videoOwnerId) {
			fetchFeedback(videoId);
			setShowFeedback(true);
		}
	}, [videoOwnerId, fetchFeedback, loggedInUserId, videoId]);

	if (showFeedback) {
		return <FeedbackTable feedback={feedback} />;
	} else {
		return <FeedbackForm videoId={videoId} />;
	}
}

const mapStateToProps = (state) => ({
	loggedInUserId: state.User.userId,
	feedback: state.User.videoDetailFocus.feedback.entries,
});

const mapActionsToProps = {
	fetchFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(Feedback);
