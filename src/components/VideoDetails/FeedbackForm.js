import React, { useState } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import { submitFeedback } from "../../redux/actions/userActions";

// Components
import { Form, Input, Button } from "antd";

// Additional Ant Design components
const { TextArea } = Input;

function FeedbackForm({ videoId, submitFeedback }) {
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
			setFeedback({ post: "" });
		}
	};

	return (
		<Form layout="vertical" onSubmit={handleSubmit}>
			<Form.Item label="Feedback">
				<TextArea name="post" rows={4} value={feedback.post} onChange={handleInput}></TextArea>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="feedback-form-button">
					Submit Feedback
				</Button>
			</Form.Item>
		</Form>
	);
}

const mapActionsToProps = {
	submitFeedback,
};

export default connect(null, mapActionsToProps)(FeedbackForm);
