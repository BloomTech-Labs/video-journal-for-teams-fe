import React, { useState } from "react";
import { Modal, Form, Input } from "antd";

const AddPromptModal = (props) => {
	const [prompt, setPrompt] = useState({ question: "", description: "" });

	const handleInput = (e) => {
		setPrompt({ ...prompt, [e.target.name]: e.target.value });
	};

	const submitPrompt = (e) => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.createPrompt(prompt, props.teamId);
				props.setVisibility(false);
			}
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
			okButtonProps={({ form: "add-prompt" }, { htmlType: "submit" })}>
			<Form id="add-prompt" onSubmit={submitPrompt}>
				<Form.Item label="Question">
					{getFieldDecorator("question", {
						rules: [{ required: true, message: "Please enter a prompt question." }],
					})(<Input
						type="text"
						name="question"
						onChange={handleInput}
						placeholder="required"
						autoComplete="off" />
					)}
				</Form.Item>
				<Form.Item label="Description">
					{getFieldDecorator("Description", {
						rules: [{ required: true, message: "Please enter a prompt description." }],
					})(<Input
						type="text"
						name="description"
						onChange={handleInput}
						placeholder="required"
						autoComplete="off" />
					)}
				</Form.Item>
			</Form>
		</Modal >
	);
}

export default Form.create({ name: "add-prompt" })(AddPromptModal);