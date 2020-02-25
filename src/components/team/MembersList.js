import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { fetchTeamMembers, createInvite, setError, clearError } from "../../redux/actions/teamActions";
import { Button } from 'antd';
import './teamTest.css';
import InviteModal from "./InviteModal.js";
import MemberCard from './MemberCard';
import Carousel from "../shared/Carousel";

function MembersList(props) {
	// #region CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
	const [showModal, setShowModal] = useState(false)
	const [code, setCode] = useState("");

	useEffect(() => {
		setCode(props.invite.link)
	}, [props.invite.link]);

	// #endregion CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC

		return (
			<>
			<div className="dashboard-header">
				<h2>Members ({props.teamMembers.length})</h2>
				{props.userRole === 1 ? null : (
						<Button
							icon="user"
							className="adding-button"
							onClick={() => setShowModal(true)}>
							Invite Member
						</Button>
					)}
			</div>
				<Carousel
					component={MemberCard}
				 	data={props.teamMembers}
				/>
			<InviteModal
					isVisible={showModal}
					setVisibility={setShowModal}
					team={props.team}
					code={code}
					createInvite={props.createInvite}
					invite={props.invite}
				/>
			</>
		)
	}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	invite: state.Team.inviteLink,
	deleteUserCount: state.Team.deleteUserCount
});

const mapActionsToProps = {
	fetchTeamMembers,
	createInvite,
	setError,
	clearError
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);
