import React, { useState } from "react";
import * as yup from "yup";
import { Form, Input, Row, Col, Button } from "antd";

const formSchema = yup.object().shape({
	first_name: yup.string(),
	last_name: yup.string(),
	email: yup.string().email(),
	username: yup.string()
});

const UpdateProfile = (props) => {
	const { first_name, last_name, email, username, handleSubmit, isUpdatingUserData, onCancel } = props;
	const [userInput, setUserInput] = useState({
		first_name: first_name,
		last_name: last_name,
		email: email,
		username: username
	});

	const handleChange = (e) => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value })
	}

	const cancel = () => {
		onCancel();
		setUserInput({
			first_name: first_name,
			last_name: last_name,
			email: email,
			username: username
		});
	}

	return (
		<Form layout="vertical" id="update-profile" onSubmit={(e) => handleSubmit(e, formSchema, userInput)}>
			<Row gutter={24}>
				<Col span={24}>
					<Form.Item label="First Name">
						<Input
							type="text"
							name="first_name"
							value={userInput.first_name}
							onChange={handleChange}
							placeholder="First Name"
						/>
					</Form.Item>
					<Form.Item label="Last Name">
						<Input
							type="text"
							name="last_name"
							value={userInput.last_name}
							onChange={handleChange}
							placeholder="Last Name"
						/>
					</Form.Item>
					<Form.Item label="Email">
						<Input
							type="text"
							name="email"
							value={userInput.email}
							onChange={handleChange}
							placeholder="Email"
						/>
					</Form.Item>
					<Form.Item label="Username">
						<Input
							type="text"
							name="username"
							value={userInput.username}
							onChange={handleChange}
							placeholder="Username"
						/>
					</Form.Item>
				</Col>
				<Col span={24} className="button-wrapper">
					<Button className="outlined-btn" size="large" onClick={cancel}>Cancel</Button>
					<Button type="primary" htmlType="submit" className="full-btn" size="large" loading={isUpdatingUserData}>Save</Button>
				</Col>
			</Row>
		</Form>
	)
}

export default UpdateProfile;