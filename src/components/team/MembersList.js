import React, { useState } from 'react';
import { connect } from "react-redux";
import { createInvite } from "../../redux/actions/teamActions";
import { Button } from 'antd';
import './teamTest.css';
import InviteModal from "./InviteModal.js";
import MemberCard from './MemberCard';
import Carousel from "../shared/Carousel";

function MembersList(props) {
	// #region CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
	const [showModal, setShowModal] = useState(false)

	const openInviteModal = () => {
		props.createInvite(props.team.id, { team_name: props.team.name })
		setShowModal(true)
	}

	// #endregion CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
	return (
		<>
			<div className="dashboard-header">
				<h2>Members ({props.teamMembers.length})</h2>
				{props.userRole === 1 ? null : (
					<Button
						icon="user"
						className="adding-button"
						onClick={openInviteModal}>
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
			/>
		</>
	)
}

const mapStateToProps = (state) => ({
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
});

const mapActionsToProps = {
	createInvite
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);
