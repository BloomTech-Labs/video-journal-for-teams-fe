import React from 'react';
import { useParams } from "react-router-dom";
import { Card, Modal } from 'antd';
import { connect } from 'react-redux';
import { deleteTeamMember, updateUserRole, } from '../../redux/actions/teamActions';

const { confirm } = Modal;

function EditMemberCard(props) {
	const { team_id } = useParams();
	const { member } = props;

	const handleDelete = () => {
		props.deleteTeamMember(team_id, member.user_id);
	}

	// Show confirmation modal when deleting member.
	const showDeleteConfirm = () => {
		confirm({
			title: <p>Are you sure you want to delete <b>{member.user_full_name}</b> from this team?</p>,
			onOk() {
				handleDelete();
			},
			okType: "danger",
			okText: "Yes",
			cancelText: 'No',
			onCancel() { },
		});
	}

	const showRoleConfirm = () => {
		confirm({
			title: <p>Are you sure you want to update role for <b>{member.user_full_name}</b>?</p>,
			onOk() {
				handleRoleChange();
			},
			okText: "Yes",
			cancelText: 'No',
			onCancel() { },
		});
	}


	const handleRoleChange = async () => {
		if (member.role_id === 1) {

			try {
				const result = await props.updateUserRole(team_id, member.user_id, 2);

				if (result) {
					roleChangeSuccess(`${member.user_full_name}'s role has been updated!`);
				} else {
					roleChangeError();
				}
			} catch (error) {
				roleChangeError();
			}

		} else if (member.role_id === 2) {

			try {
				const result = await props.updateUserRole(team_id, member.user_id, 1);

				if (result) {
					roleChangeSuccess(`${member.user_full_name}'s role has been updated!`);
				} else {
					roleChangeError();
				}
			} catch (error) {
				roleChangeError();
			}

		}
	}

	const roleChangeSuccess = (message) => {
		Modal.success({
			content: message,
		});
	}

	const roleChangeError = () => {
		Modal.error({
			title: 'Error!',
			content: "Uh oh, something's gone wrong. Try again later.",
		});
	}

	return (
		<Card className="edit-card">
			<span onClick={showDeleteConfirm}>Delete</span>
			<br />
			{member.role_id === 1 ? (<span onClick={showRoleConfirm}>Promote</span>) : (<span onClick={showRoleConfirm}>Demote</span>)}
		</Card>
	)
}

const mapStateToProps = (state) => ({
	deleteCount: state.Team.deletedUserCount,
});

const mapActionsToProps = {
	deleteTeamMember,
	updateUserRole,
}

export default connect(mapStateToProps, mapActionsToProps)(EditMemberCard);