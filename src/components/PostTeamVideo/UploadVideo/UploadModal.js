import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

// Components
import { Modal, Form, Input } from "antd";

function UploadModal(props) {
	const urlParams = useParams();
	const history = useHistory();

	const [videoData, setvideoData] = useState({
		title: "",
		description: "",
		owner_id: props.user_id,
		prompt_id: urlParams.prompt_id,
		raw: props.rawVideoData,
	});

	function submitVideo(e) {
		e.preventDefault();

		props.form.validateFields((err, values) => {
			if (!err) {
				//No errors, begin upload
				props.uploadVideo(videoData);
				props.setVisibility(false);
				history.goBack();
			}
		});
	}

	function handleCancel() {
		props.setVisibility(false);
	}

	function handleFormInput(e) {
		setvideoData({ ...videoData, [e.target.name]: e.target.value });
	}

	const { getFieldDecorator } = props.form;

	return (
		<Modal
			title="Post new video"
			visible={props.isVisible}
			okText="Upload Video"
			onOk={submitVideo}
			onCancel={handleCancel}
			okButtonProps={({ form: "upload" }, { htmlType: "submit" })}>
			<Form id="upload" onSubmit={submitVideo}>
				<Form.Item>
					{getFieldDecorator("title", {
						rules: [{ required: true, message: "Please enter a title for the video." }],
					})(
						<Input type="text" name="title" onChange={handleFormInput} placeholder="Video title" autoComplete="off" />
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("description", {
						rules: [{ required: true, message: "Please enter a description for the video." }],
					})(
						<Input
							type="text"
							name="description"
							onChange={handleFormInput}
							placeholder="Video description"
							autoComplete="off"
						/>
					)}
				</Form.Item>
			</Form>
		</Modal>
	);
}

export default Form.create({ name: "upload" })(UploadModal);
