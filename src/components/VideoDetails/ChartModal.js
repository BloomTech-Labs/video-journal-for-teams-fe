import React, { useState, PureComponent } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const ChartModal = () => {
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
				See your chart
			</Button>

			<Modal
				title="Feedback Modal"
				visible={showModal}
				onOk={handleOk}
				onCancel={handleCancel}
				okButtonProps={{ style: { backgroundColor: "#6954EA", color: "white", border: "none" } }}>
				<RadarChart />
			</Modal>
		</div>
	);
};

export default ChartModal;
