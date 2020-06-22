import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchFeedback } from "../../redux/actions/userActions";
import Stars from "./Stars.js";
import { setFeedback, submitFeedback } from "../../redux/actions/userActions";

const QuestionForm = ({ videoId, videoOwnerId }) => {
	const [showModal, setShowModal] = useState(false);
	const [values, setValues] = useState(null);
	const { team_id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const feedback = useSelector((state) => state.User.videoFeedback);
	const userId = useSelector((state) => state.User.userId);
	const titles = [
		"Overall Performance",
		"Delivery and Presentation",
		"Quality of response: : How well did he/she/they respond to the question?",
		"Audio quality: Voice clarity, background noise, etc.",
		"Visual environment: Does the environment look professional? Were there any unprofessional interruptions in the background",
	];
	const titleNames = [
		"overall_performance",
		"delivery_and_presentation",
		"response_quality",
		"audio_quality",
		"visual_environment",
	];

	const handleOpen = () => {
		setShowModal(true);
	};

	const handleOk = () => {
		const feedbackObj = { ...feedback, video_id: videoId, owner_id: userId, post: values };
		dispatch(submitFeedback(feedbackObj));
		dispatch(setFeedback("post", values));
		history.push(`/videos/${videoId}`);
		setShowModal(false);
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const handleChange = (e) => {
		setValues(e.target.value);
	};

	return (
		<div>
			<Button
				type="primary"
				style={{
					color: "white",
					border: "none",
					fontSize: "1rem",
					textAlign: "left",
					backgroundColor: "#6954EA",
				}}
				onClick={handleOpen}>
				Leave your feedback!
			</Button>{" "}
			<Modal
				title="Leave your feedback"
				visible={showModal}
				onOk={handleOk}
				onCancel={handleCancel}
				okButtonProps={{
					style: {
						backgroundColor: "#6954EA",
						color: "white",
						border: "none",
					},
				}}>
				<Form
					name="basic"
					initialValues={{
						remember: false,
					}}>
					{titles.map((el, i) => {
						return (
							<Form.Item key={i}>
								<Stars values={titleNames[i]} />
								<p>{el}</p>
							</Form.Item>
						);
					})}

					<Form.Item
						label="Additional Comments"
						name="free_text"
						rules={[{ required: true, message: " Any additional comments?!" }]}
						onChange={handleChange}>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default QuestionForm;
