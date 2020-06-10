import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const QuestionForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [values, setValues] = useState(null);
	const { team_id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleOpen = () => {
		setShowModal(true);
	};

	const handleOk = () => {
		if (values) {
			const updates = {
				name: values,
			};
			axios
				.put(``, updates)
				.then((res) => {
					dispatch(fetchTeamById(team_id));
					setShowModal(!showModal);
				})
				.catch((err) => console.log(err));
		}
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const handleChange = (e) => {
		setValues(e.target.value);
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
				title="Feedback Modal"
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
					<Form.Item>
						{" "}
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
						<br />
						Overall performance
					</Form.Item>
					<Form.Item>
						{" "}
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
						<br />
						Delivery and presentation
					</Form.Item>
					<Form.Item>
						{" "}
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
						<br />
						Quality of response: How well did he/she/they respond to the question?
					</Form.Item>
					<Form.Item>
						{" "}
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
						Audio quality: Voice clarity, background noise, etc.
					</Form.Item>
					<Form.Item>
						{" "}
						Visual environment: Does the environment look professional? Were there any unprofessional interruptions in
						the background? Etc.
						<br />
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
					<Form.Item
						label="Free Text"
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
