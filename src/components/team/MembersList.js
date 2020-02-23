import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamMembers, createInvite, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Row, Col, Modal, Button, Form, Input, Divider } from 'antd';
import './teamTest.css';
import InviteModal from "./InviteModal.js";
import MemberCard from './MemberCard';

const { Header, Content } = Layout;

function MembersList(props) {
	// #region CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
	const [showModal, setShowModal] = useState(false)
	const [code, setCode] = useState("");

	useEffect(() => {
		setCode(props.invite.link)
	}, [props.invite.link]);

	// #endregion CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC

	if (!props.teamMembers) {
		return <h2>Loading...</h2>;
	} else {

		return (
			<Content>
				<h1>Members({props.teamMembers.length})</h1>
				{/* Add member invite link button */}
				{props.userRole === 1 ? null : (
					<Button
						type="primary"
						shape="round"
						icon="user"
						className="adding-button"
						onClick={() => setShowModal(true)}>
						Invite Member
					</Button>
				)}
				<Divider />
				<InviteModal
					isVisible={showModal}
					setVisibility={setShowModal}
					team={props.team}
					code={code}
					createInvite={props.createInvite}
					invite={props.invite}
				/>
				{/* Display members */}
				<div className="card-flex">
					{props.teamMembers.map((member) => (
						<MemberCard key={member.id} member={member} userRole={props.userRole} />
					))}
				</div>
			</Content >
		)
	}
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
