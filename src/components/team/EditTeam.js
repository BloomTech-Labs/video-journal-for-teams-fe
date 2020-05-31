import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const EditTeam = () => {
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
				.put(`/v2/teams/${team_id}`, updates)
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
	function iDelete() {
		axios
			.delete(`/v2/teams/${team_id}`)
			.then((res) => history.push("/user-dashboard"))
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<Button
				type="primary"
				style={{ color: "white", border: "none", fontSize: "1rem", textAlign: "left",backgroundColor:"#6954EA"}}
				onClick={handleOpen}>
				Edit Team
			</Button>
			
			<Modal title="Edit Modal" visible={showModal} onOk={handleOk} onCancel={handleCancel}>
				<Form name="basic" initialValues={{ remember: true }}>
					<Form.Item
						label="team name"
						name="team_name"
						rules={[{ required: true, message: "Please enter a new team name!" }]}
						onChange={handleChange}>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default EditTeam;
