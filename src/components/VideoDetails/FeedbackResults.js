import React, { useState, PureComponent } from "react";
import { Modal, Button, Form, Input, Popover } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InfoCircleTwoTone } from "@ant-design/icons";

const ResultsModal = () => {
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
			const updates = { name: values };
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

	return (
		<div>
			<Button
				type="primary"
				style={{ color: "white", border: "none", fontSize: "1rem", textAlign: "left", backgroundColor: "#6954EA" }}
				onClick={handleOpen}>
				See your results
			</Button>

			<Modal
				title="Your Results"
				visible={showModal}
				onOk={handleOk}
				onCancel={handleCancel}
				okButtonProps={{ style: { backgroundColor: "#6954EA", color: "white", border: "none" } }}>
				Overall Performance : Some Score
				<Popover content="Some extra explination of what this means!">
					<Button
						style={{
							color: "#6954EA",
							border: "hidden",
							fontSize: "1rem",
							textAlign: "left",
							borderStyle: "none",
							backgroundColor: "transparent",
							boxShadow: "none",
						}}>
						<InfoCircleTwoTone />
					</Button>
				</Popover>
				<br />
				Delivery and Presentation : Some Score
				<Popover content="Some extra explination of what this means!">
					<Button
						style={{
							color: "#6954EA",
							border: "hidden",
							fontSize: "1rem",
							textAlign: "left",
							borderStyle: "none",
							backgroundColor: "transparent",
							boxShadow: "none",
						}}>
						<InfoCircleTwoTone />
					</Button>
				</Popover>
				<br />
				Quality of Response : Some Score
				<Popover content="Some extra explination of what this means!">
					<Button
						style={{
							color: "#6954EA",
							border: "hidden",
							fontSize: "1rem",
							textAlign: "left",
							borderStyle: "none",
							backgroundColor: "transparent",
							boxShadow: "none",
						}}>
						<InfoCircleTwoTone />
					</Button>
				</Popover>
				<br />
				Audio Quality : Some Score
				<Popover content="Some extra explination of what this means!">
					<Button
						style={{
							color: "#6954EA",
							border: "hidden",
							fontSize: "1rem",
							textAlign: "left",
							borderStyle: "none",
							backgroundColor: "transparent",
							boxShadow: "none",
						}}>
						<InfoCircleTwoTone />
					</Button>
				</Popover>
				<br />
				Visual Enviroment : Some Score
				<Popover content="Some extra explination of what this means!">
					<Button
						style={{
							color: "#6954EA",
							border: "hidden",
							fontSize: "1rem",
							textAlign: "left",
							borderStyle: "none",
							backgroundColor: "transparent",
							boxShadow: "none",
						}}>
						<InfoCircleTwoTone />
					</Button>
				</Popover>
			</Modal>
		</div>
	);
};

export default ResultsModal;
