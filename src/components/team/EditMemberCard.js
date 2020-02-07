import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Button, Card } from 'antd';
import { connect } from 'react-redux';
import {deleteTeamMember} from '../../redux/actions/teamActions';

function EditMemberCard(props) {
	const { team_id } = useParams();
	const {member} = props;

	const handleDelete = () => {
		props.deleteTeamMember(team_id, member.user_id);
	}

	return (
		<Card className="edit-card">
			<span onClick={handleDelete}>Delete</span>
		</Card>
	)
}

const mapStateToProps = (state) => {
	return {
		deleteCount: state.Team.deletedUserCount
	}
}

const mapActionsToProps = {
	deleteTeamMember
}

export default connect(mapStateToProps, mapActionsToProps)(EditMemberCard);
