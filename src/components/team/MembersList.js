import React, { useState, useContext } from 'react';
import { UserContext } from "../utils/UserContext";
import { connect } from "react-redux";
import { createInvite } from "../../redux/actions/teamActions";
import { Button } from 'antd';
import './teamTest.css';
import InviteModal from "./InviteModal.js";
import MemberCard from './MemberCard';
import Carousel from "../shared/Carousel";

function MembersList(props) {
	const [showModal, setShowModal] = useState(false)
	const { userRole } = useContext(UserContext);

	const openInviteModal = () => {
		props.createInvite(props.team.id, { team_name: props.team.name })
		setShowModal(true)
	}

	return (
		<>
			<div className="dashboard-header">
				<h2>Members ({props.teamMembers.length})</h2>
				{userRole === 1 ? null : (
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
