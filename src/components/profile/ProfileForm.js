import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
<<<<<<< HEAD
=======
import { Form, Input, Button, Row, Col, notification } from 'antd';
import 'antd/dist/antd.css';
>>>>>>> 5fc023ce0e4dfab856a4a1b04d75a5a1f9b2aa77
import { updateUserData, getUserData } from '../../redux/actions/userActions';
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import 'antd/dist/antd.css';
import { Collapse, Alert, notification } from 'antd';
const { Panel } = Collapse;

function ProfileForm(props) {
	const { id, updateUserData, getUserData, error } = props;
	const [formError, setFormError] = useState(null);
	const [isSaved, setIsSaved] = useState(false);
	const [expando, setExpando] = useState("0");

	useEffect(() => {
		getUserData(id);
	}, [isSaved, getUserData, id, error])

	const togglePanel = (key) => {
		setExpando(key)
	}

	const handleSubmit = (e, formSchema, changes) => {
		e.preventDefault();
		formSchema
			.validate(changes, { abortEarly: true })
			.then(() => {
				updateUserData(id, changes);
				setIsSaved(!isSaved);
				setExpando("0");
				setFormError(null);
			})
			.catch((validationError) => {
				setFormError(validationError.errors);
			});
	}

	const onCancel = () => {
		togglePanel("0");
		setFormError(null);
	}

	return (
		<div className="profile-information">
			<h1>Edit Profile</h1>
			<div className="form-container">
				<Collapse activeKey={expando} onChange={(key) => togglePanel(key)}>
					<Panel header="Update your personal info" key="1" style={{ textAlign: "left" }}>
						{formError ? <Alert message={formError} type="error" /> : null}
						<UpdateProfile
							first_name={props.first_name}
							last_name={props.last_name}
							email={props.email}
							username={props.username}
							handleSubmit={handleSubmit}
							isUpdatingUserData={props.isUpdatingUserData}
							onCancel={onCancel} />
					</Panel>
					<Panel header="Change your password" key="2" style={{ textAlign: "left" }}>
						{formError ? <Alert message={formError} type="error" /> : null}
						<ChangePassword
							handleSubmit={handleSubmit}
							isUpdatingUserData={props.isUpdatingUserData}
							onCancel={onCancel} />
					</Panel>
				</Collapse>
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
		isUpdatingUserData: state.User.isUpdatingUserData,
		error: state.User.error
	}
};

export default connect(mapStateToProps, { updateUserData, getUserData })(ProfileForm);
