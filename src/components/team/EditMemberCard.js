import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { deleteTeamMember, updateUserRole } from '../../redux/actions/teamActions';

const { confirm } = Modal;

function EditMemberCard(props) {
	const { team_id } = useParams();
	const { member, roleUpdated } = props;

	const handleDelete = () => {
		props.deleteTeamMember(team_id, member.user_id);
	}

	// Show confirmation modal when deleting member.
	const showConfirm = () => {
		confirm({
			title: <p>Are you sure you want to delete <b>{member.user_full_name}</b> from this team?</p>,
			content: "When you click OK, this member will be deleted from team.",
			onOk() {
				handleDelete();
			},
			okType: "danger",
			okText: "Delete",
			onCancel() { },
		});
	}


	const handleRoleChange = () => {
		if (member.role_id === 1) {
			// props.updateUserRole(team_id, member.user_id, 2);
			props.updateUserRole(team_id, member.user_id, 20); //FIX BUG HELP.
			showSuccessModal()
		} else if (member.role_id === 2) {
			props.updateUserRole(team_id, member.user_id, 1);
			showSuccessModal()
		}
	}

	const showSuccessModal = () => {
		if (roleUpdated) {
			success(`${member.user_full_name}'s role has been updated!`);
		} else {
			error();
		}
	}

	const success = (message) => {
		Modal.success({
			content: message,
		});
	}

	const error = () => {
		Modal.error({
			title: 'Error!',
			content: "Uh oh, something's gone wrong. Tyr again.",
		});
	}

	return (
		<Card className="edit-card">
			<span onClick={showConfirm}>Delete</span>
			<br />
			{member.role_id === 1 ? (<span onClick={handleRoleChange}>Promote</span>) : (<span onClick={handleRoleChange}>Demote</span>)}
		</Card>
	)
}

const mapStateToProps = (state) => ({
	deleteCount: state.Team.deletedUserCount,
	roleUpdated: state.Team.roleUpdated
});

const mapActionsToProps = {
	deleteTeamMember,
	updateUserRole
}

export default connect(mapStateToProps, mapActionsToProps)(EditMemberCard);