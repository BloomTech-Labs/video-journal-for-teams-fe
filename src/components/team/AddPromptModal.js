import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import { useSelector } from "react-redux";

import axiosWithAuth from "../utils/AxiosWithAuth";

const AddPromptModal = (props) => {
	const [prompt, setPrompt] = useState({ question: "", description: "" });
	const uid = useSelector((state) => state.User.userId);

	const handleInput = (e) => {
		setPrompt({ ...prompt, [e.target.name]: e.target.value });
	};

	const submitPrompt = (e) => {
		e.preventDefault();

		props.form.validateFields((err, values) => {
			if (!err) {
				props.createPrompt(prompt, props.teamId, uid);

				props.setVisibility(false);
			}
		});

		axiosWithAuth()
			.post(`/email/teams`, {
				teamId: props.teamId,
				post: prompt.question,
			})
			.then((hello) => {
				console.log("email posted");
			})
			.catch((err) => {
				console.log("error", err);
			});
	};

	function handleCancel() {
		props.setVisibility(false);
	}

	const { getFieldDecorator } = props.form;

	return (
		<Modal
			title="Add New Prompt"
			visible={props.isVisible}
			okText="Submit"
			onOk={submitPrompt}
			onCancel={handleCancel}
			okButtonProps={({ form: "add-prompt" }, { htmlType: "submit" }, {style:{backgroundColor:"#6954EA",color:"white",border:"none"}})}>
			<Form id="add-prompt" onSubmit={submitPrompt}>
				<Form.Item label="Question">
					{getFieldDecorator("question", {
						rules: [{ required: true, message: "Please enter a prompt question." }],
					})(<Input type="text" name="question" onChange={handleInput} placeholder="required" autoComplete="off" />)}
				</Form.Item>
				<Form.Item label="Description">
					{getFieldDecorator("Description", {
						rules: [{ required: true, message: "Please enter a prompt description." }],
					})(<Input type="text" name="description" onChange={handleInput} placeholder="required" autoComplete="off" />)}
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default Form.create({ name: "add-prompt" })(AddPromptModal);
