import React, { useState } from "react";
import * as yup from "yup";
import { Form, Input, Row, Col, Button } from "antd";

const formSchema = yup.object().shape({
	currentPassword: yup
		.string()
		.min(8, "Current password should be at least 8 characters.")
		.max(72, "Current password should be less than 16 characters."),
	newPassword: yup
		.string()
		.min(8, "New password must be at least 8 characters.")
		.max(72, "New password must be less than 72 characters."),
	confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "New passwords must match."),
});

const ChangePassword = (props) => {
	const { handleSubmit, isUpdatingUserData, onCancel } = props;
	const [passwordChanges, setPasswordChanges] = useState({});

	const handleChange = (e) => {
		setPasswordChanges({ ...passwordChanges, [e.target.name]: e.target.value });
	};

	const cancel = () => {
		onCancel();
		setPasswordChanges({});
	}

	return (
		< Form id="change-password" onSubmit={(e) => { setPasswordChanges({}); handleSubmit(e, formSchema, passwordChanges) }} >
			<Row gutter={24}>
				<Col span={24}>
					<Form.Item label="Current Password">
						<Input
							type="password"
							name="currentPassword"
							onChange={handleChange}
							value={passwordChanges.currentPassword}
							placeholder="Current Password"
							autoComplete="off"
							required
						/>
					</Form.Item>
					<Form.Item label="New Password">
						<Input
							type="password"
							name="newPassword"
							onChange={handleChange}
							value={passwordChanges.newPassword}
							placeholder="New Password"
							autoComplete="off"
							required
						/>
					</Form.Item>
					<Form.Item label="Confirm Password">
						<Input
							type="password"
							name="confirmPassword"
							onChange={handleChange}
							value={passwordChanges.confirmPassword}
							placeholder="Confirm Password"
							autoComplete="off"
							required
						/>
					</Form.Item>
				</Col>
				<Col span={24} className="button-wrapper">
					<Button className="outlined-btn" size="large" onClick={cancel}>Cancel</Button>
					<Button type="primary" htmlType="submit" className="full-btn" size="large" loading={isUpdatingUserData}>Save</Button>
				</Col>
			</Row>
		</Form >
	);
}

export default ChangePassword;