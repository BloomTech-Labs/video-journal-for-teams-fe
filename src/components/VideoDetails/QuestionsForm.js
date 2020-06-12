import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Stars from "./Stars.js";
import { setFeedback } from "../../redux/actions/userActions";

const QuestionForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [values, setValues] = useState(null);
	const { team_id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const feedback = useSelector((state) => state.User.videoFeedback);
	console.log(feedback);
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

	// const handleOk = () => {
	// 	if (values) {
	// 		const updates = {
	// 			name: values,
	// 		};
	// 		axios
	// 			.put(``, updates)
	// 			.then((res) => {

	// 				setShowModal(!showModal);
	// 			})
	// 			.catch((err) => console.log(err));
	// 	}
	// };

	const handleOk = () => {
		dispatch(setFeedback("post", values));
		axios.post("", feedback);
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const handleChange = (e) => {
		setValues(e.target.value);
		dispatch(setFeedback("post", values));
	};

	const [rating, setRating] = useState(null);

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
				Leave your feeback!
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
						remember: true,
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
