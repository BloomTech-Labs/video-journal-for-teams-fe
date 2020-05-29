import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchTeamById } from "../../redux/actions/teamActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DeleteTeam = () => {
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
			.then((res) =>{
                    setShowModal(false)
                 history.push("/user-dashboard")
                })
            .catch((err) => console.log(err));
            
	}

	return (
		<div>
			<Button
				type="primary"
				style={{ color: "white", border: "none", fontSize: "1rem", textAlign: "left",  borderStyle:"none",backgroundColor:"#6954EA"}}
				onClick={handleOpen}>
				Delete team
			</Button>

			<Modal title="Delete this team" visible={showModal} onOk={iDelete} onCancel={handleCancel} okText="Delete" okButtonProps={{style:{backgroundColor:"#6954EA",color:"white",border:"none"}}}>
				<Form name="basic" initialValues={{ remember: true }}>
					<Form.Item
						
						onChange={handleChange}>
                            Are you sure that you want to delete this team?
			
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default DeleteTeam;