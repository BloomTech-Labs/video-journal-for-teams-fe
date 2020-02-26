import React, { forwardRef } from "react";

// Components
import { Form, Input } from "antd";

export const UploadVideo = forwardRef((props, ref) => {
	
	const { getFieldDecorator } = props.form;

	return (
			<Form id="upload" ref={ref}>
				<Form.Item>
					{getFieldDecorator("title", {
						rules: [{ required: true, message: "Please enter a title for the video." }],
					})(
						<Input type="text" name="title" onChange={props.handleFormInput} placeholder="Video title" autoComplete="off" />
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("description", {
						rules: [{ required: true, message: "Please enter a description for the video." }],
					})(
						<Input
							type="text"
							name="description"
							onChange={props.handleFormInput}
							placeholder="Video description"
							autoComplete="off"
						/>
					)}
				</Form.Item>
			</Form>
	);
})

export default Form.create({ name: "upload" })(UploadVideo);

