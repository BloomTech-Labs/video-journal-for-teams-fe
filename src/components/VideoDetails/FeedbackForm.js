import React, { useState } from "react";

// Components
import { Form, Input, Button } from "antd";

// Additional Ant Design components
const { TextArea } = Input;

function FeedbackForm() {
	const [feedbackInput, setFeedbackInput] = useState("");

	const handleInput = (e) => {
		setFeedbackInput(e.target.value);
	};

	const submitFeedback = (e) => {
		e.preventDefault();

		if (feedbackInput) {
			console.log("Need an endpoint to submit feedback");
			setFeedbackInput("");
		}
	};

	return (
		<Form layout="vertical" onSubmit={submitFeedback}>
			<Form.Item label="Feedback">
				<TextArea rows={4} value={feedbackInput} onChange={handleInput}></TextArea>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="feedback-form-button">
					Submit Feedback
				</Button>
			</Form.Item>
		</Form>
	);
}

export default FeedbackForm;
