import React from 'react';
import { useParams } from "react-router-dom";
import { Card } from 'antd';
import { connect } from 'react-redux';
import { deleteTeamMember, updateUserRole } from '../../redux/actions/teamActions';

function EditMemberCard(props) {
	const { team_id } = useParams();
	const { member } = props;

	const handleDelete = () => {
		props.deleteTeamMember(team_id, member.user_id);
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
			<span onClick={handleDelete}>Delete</span>
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