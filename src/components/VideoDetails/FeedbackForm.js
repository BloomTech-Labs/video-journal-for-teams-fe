import React, { useState } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import { submitFeedback } from "../../redux/actions/userActions";

// Components
import { Form, Input, Button } from "antd";
import axios from 'axios'
import axiosWithAuth from '../utils/AxiosWithAuth'

// Additional Ant Design components
const { TextArea } = Input;



export function FeedbackForm({ videoId, videoOwnerId, submitFeedback, isSubmitting, all }) {
	const [feedback, setFeedback] = useState({
		post: "",
	});

	const handleInput = (e) => {
		setFeedback({ ...feedback, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (feedback.post) {
			submitFeedback(videoId, feedback);
			
			axiosWithAuth()
			.post(`/email`, {
				id: videoOwnerId,
				post: feedback.post
			})
		.then((hello) => {
			console.log('hellllllllloo', hello)
		})
		.catch((err) => {
		console.log('error', err)
		});
		setFeedback({ post: "" });
		}
	};

	return (
		<Form layout="vertical" onSubmit={handleSubmit}>
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
