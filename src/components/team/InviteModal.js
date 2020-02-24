import React from "react";
import CopyClipboard from "../utils/CopyClipboard.js";
import { Modal, Form, Input } from "antd";

const InviteModal = (props) => {
	let baseURL = process.env.REACT_APP_FRONT_END_URL || "https://www.alpacavids.com/";
	let URL = baseURL.concat("invite/", props.code)

	const handleOk = (e) => {
		e.preventDefault();
		props.createInvite(props.team.id, { team_name: props.team.name })
		props.setVisibility(false);
		CopyClipboard("team-link")
	};

	function handleCancel() {
		props.setVisibility(false);
	}

	return (
		<Modal
			title="Team Invitation Link"
			visible={props.isVisible}
			okText="Copy"
			onOk={handleOk}
			onCancel={handleCancel}>
			<Form>
				<Form.Item label="Copy Link">
					<Input readOnly id="team-link" value={URL} />
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default InviteModal;