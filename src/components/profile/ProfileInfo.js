import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { updateUserData, getUserData } from '../../redux/actions/userActions';
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import 'antd/dist/antd.css';
import { Collapse, Alert, notification } from 'antd';
const { Panel } = Collapse;

function ProfileInfo(props) {
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
			.then(async () => {
				await updateUserData(id, changes);
				if (!error) {
					openSuccessNotification();
					setIsSaved(!isSaved);
					setExpando("0");
					setFormError(null);
				} else {
					openErrorNotification(error);
				};
			})
			.catch((validationError) => {
				setFormError(validationError.errors);
			});

	}

	const onCancel = () => {
		togglePanel("0");
		setFormError(null);
	}

	const openSuccessNotification = () => {
		notification.success({
			message: 'Profile Updated!',
			duration: 2,
		});
	};

	const openErrorNotification = (errMsg) => {
		notification.error({
			message: `Something's wrong! Try again later. ${errMsg}`,
			duration: 2
		});
	};

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

export default connect(mapStateToProps, { updateUserData, getUserData })(ProfileInfo);
