import React, { useState } from "react";

// Redux
import { connect, useSelector } from "react-redux";

// Actions
import { submitFeedback } from "../../redux/actions/userActions";

// Components
import { Form, Input, Button, Icon } from "antd";
import axiosWithAuth from "../utils/AxiosWithAuth";

import { FaStar } from "react-icons/fa";

// Additional Ant Design components
const { TextArea } = Input;

export function FeedbackForm({ videoId, videoOwnerId, submitFeedback, isSubmitting, all }) {
	const [feedback, setFeedback] = useState({
		post: "",
	});
	const uid = useSelector((state) => state.User.userId);
	const [rating, setRating] = useState(null);

	const handleInput = (e) => {
		setFeedback({ ...feedback, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (feedback.post) {
			submitFeedback(videoId, feedback, uid);

			axiosWithAuth()
				.post(`/email`, {
					id: videoOwnerId,
					post: feedback.post,
				})
				.then((hello) => {
					console.log("submitted email");
				})
				.catch((err) => {
					console.log("error", err);
				});
			setFeedback({ post: "" });
		}
	};

	return (
		<Form layout="vertical" onSubmit={handleSubmit}>
			<Form.Item>
				{[...Array(5)].map((_, i) => {
					const ratingValue = ++i;
					return (
						<label>
							<input type="radio" name="rating" onClick={() => setRating(ratingValue)}></input>
							<FaStar
								className="star"
								color={ratingValue <= rating ? "yellow" : "grey"}
								size={30}
								value={ratingValue}
							/>
						</label>
					);
				})}
			</Form.Item>
			<Form.Item label="Feedback">
				<TextArea name="post" rows={4} value={feedback.post} onChange={handleInput}></TextArea>
			</Form.Item>
			<Form.Item>
				<Button
					loading={isSubmitting}
					type="primary"
					htmlType="submit"
					className="feedback-form-button"
					disabled={!feedback.post ? true : false}>
					Submit Feedback
				</Button>
			</Form.Item>
		</Form>
	);
}

const mapStateToProps = (state) => ({
	isSubmitting: state.User.videoDetailFocus.feedback.isSubmitting,
});

const mapActionsToProps = {
	submitFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(FeedbackForm);
