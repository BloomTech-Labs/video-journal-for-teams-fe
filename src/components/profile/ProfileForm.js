import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { updateUserData } from '../../redux/actions/userActions';

function ProfileForm(props) {
	const { id, first_name, last_name, email, username, avatar, updateUserData } = props;

	const [userInput, setUserInput] = useState({
		first_name: "",
		last_name: "",
		email: "",
		username: ""
	});

	const handleChange = (e) => {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		updateUserData(id, userInput);
	}


	return (
		<div className="profile-information">
			<h1>Edit Profile</h1>
			<div className="form-container">
				<Form layout="vertical" onSubmit={handleSubmit}>
					<Row gutter={24}>
						<Col span={12}>
							<Form.Item label="First Name">
								<Input
									placeholder="First Name"
									name="first_name"
									value={first_name}
									onChange={handleChange}
								/>
							</Form.Item>
							<Form.Item label="Last Name">
								<Input
									placeholder="Last Name"
									name="last_name"
									value={last_name}
									onChange={handleChange}
								/>
							</Form.Item>
							<Form.Item label="Email">
								<Input placeholder="Email"
									name="email"
									value={email}
									onChange={handleChange}
								/>
							</Form.Item>
							<Form.Item label="Username">
								<Input placeholder="Username"
									name="username"
									value={username}
									onChange={handleChange}
								/>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item label="Current Password">
								<Input placeholder="Current Password" />
							</Form.Item>
							<Form.Item label="New Password">
								<Input placeholder="New Password" />
							</Form.Item>
							<Form.Item label="Confirm Password">
								<Input placeholder="Confirm Password" />
							</Form.Item>
						</Col>
						<Col span={24} className="button-wrapper">
							<Button className="outlined-btn">Cancel</Button>
							<Button type="primary" htmlType="submit" className="full-btn">Save</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		id: state.User.userId,
		first_name: state.User.first_name,
		last_name: state.User.last_name,
		email: state.User.email,
		username: state.User.username,
		avatar: state.User.avatar,
	}
};

export default connect(mapStateToProps, { updateUserData })(ProfileForm);
