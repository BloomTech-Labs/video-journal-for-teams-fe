import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { updateUserData, getUserData } from '../../redux/actions/userActions';
import UpdateProfile from "./UpdateProfile";
import 'antd/dist/antd.css';




function ProfileForm(props) {
	const { id, updateUserData, getUserData } = props;
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		getUserData(id);
	}, [isSaved, getUserData, id])


	const handleSubmit = (e, formSchema, changes) => {
		e.preventDefault();
		formSchema
			.validate(changes, { abortEarly: true })
			.then(() => {
				updateUserData(id, changes);
				setIsSaved(!isSaved);
			})
			
	}


	return (
		<div className="profile-information">
			<h1>Edit Profile</h1>
			<div className="form-container">
				<UpdateProfile
					first_name={props.first_name}
					last_name={props.last_name}
					email={props.email}
					username={props.username}
					handleSubmit={handleSubmit}
					isUpdatingUserData={props.isUpdatingUserData}
				 />
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
		isUpdatingUserData: state.User.isUpdatingUserData
	}
};

export default connect(mapStateToProps, { updateUserData, getUserData })(ProfileForm);
