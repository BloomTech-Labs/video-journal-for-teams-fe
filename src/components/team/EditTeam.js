import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

const EditTeam = () => {
	const [showModal, setShowModal] = useState(false);
	const [values, setValues] = useState(null);
	const currentName = useSelector((state) => state.Team.team.name);
	const { team_id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const handleOpen = () => {
		setShowModal(true);
	};

	const handleOk = () => {
		if (values) {
			const updates = { name: values };
			AxiosWithAuth()
				.put(`/v2/teams/${team_id}`, updates)
				.then((res) => {
					dispatch(fetchTeamById(team_id));
					setShowModal(!showModal);
					setValues(null);
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
		AxiosWithAuth()
			.delete(`/v2/teams/${team_id}`)
			.then((res) => history.push("/user-dashboard"))
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<Button
				type="primary"
				style={{
					color: "#6954EA",
					border: "none",
					fontSize: "1rem",
					textAlign: "left",
					backgroundColor: "transparent",
					boxShadow: "none",
				}}
				onClick={handleOpen}>
				<EditOutlined style={{ fontSize: "1.6rem" }} />
			</Button>

			<Modal
				title={`Current Name: ${currentName}`}
				visible={showModal}
				onOk={handleOk}
				onCancel={handleCancel}
				okButtonProps={{ style: { backgroundColor: "#6954EA", color: "white", border: "none" } }}>
				<Form name="basic" initialValues={{ remember: false }}>
					<Form.Item
						label="New Team Name"
						name="team_name"
						rules={[{ required: true, message: "Please enter a new team name!" }]}
						onChange={handleChange}>
						<Input value={values} onChange={handleChange} />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default EditTeam;
