import React from 'react';
import { useParams } from "react-router-dom";
import { Card, Modal } from 'antd';
import { connect } from 'react-redux';
import { deleteTeamMember, updateUserRole } from '../../redux/actions/teamActions';

const { confirm } = Modal;
function EditMemberCard(props) {
	const { team_id } = useParams();
	const { member } = props;

	const handleDelete = () => {
		props.deleteTeamMember(team_id, member.user_id);
	}

	// Show confirmation modal when deleting member.
	function showConfirm() {
		confirm({
			title: <p>Do you want to delete <b>{member.user_full_name}</b> from this team?</p>,
			content: 'When you click OK, this member will be deleted from team.',
			onOk() {
				handleDelete();
			},
			onCancel() { },
		});
	}

	// Update member's role locally
	const handleRoleChange = () => {
		if (member.role_id === 1) {
			props.updateUserRole(team_id, member.user_id, 2);
		} else if (member.role_id === 2) {
			props.updateUserRole(team_id, member.user_id, 1);
		}
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
	deleteCount: state.Team.deletedUserCount
});

const mapActionsToProps = {
	deleteTeamMember,
	updateUserRole
}

export default connect(mapStateToProps, mapActionsToProps)(EditMemberCard);