import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card } from 'antd';
import { connect } from 'react-redux';
import { deleteTeamMember, updateUserRole } from '../../redux/actions/teamActions';

function EditMemberCard(props) {
	const { team_id } = useParams();
	const { member } = props;
	const [role, setRole] = useState(member.role_id);

	const handleDelete = () => {
		props.deleteTeamMember(team_id, member.user_id);
	}

	// Update member's role locally
	const handleRoleChange = () => {

		if (member.role_id === 1) {
			setRole(member.role_id = 2);

		} else if (member.role_id === 2) {
			setRole(member.role_id = 1);

		}
	}

	// run global update when role changes locally
	useEffect(() => {
		props.updateUserRole(team_id, member.user_id, role);
	}, [role])

	return (
		<Card className="edit-card">
			<span onClick={handleDelete}>Delete</span>
			<br />
			{member.role_id === 1 ? (<span onClick={handleRoleChange}>Promote</span>) : (<span onClick={handleRoleChange}>Demote</span>)}
		</Card>
	)
}

const mapStateToProps = (state) => {
	return {
		deleteCount: state.Team.deletedUserCount
	}
}

const mapActionsToProps = {
	deleteTeamMember,
	updateUserRole
}

export default connect(mapStateToProps, mapActionsToProps)(EditMemberCard);
