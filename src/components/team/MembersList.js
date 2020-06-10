import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { connect, useSelector } from "react-redux";
import { createInvite } from "../../redux/actions/teamActions";
import { Button } from "antd";
import "./teamTest.css";
import InviteModal from "./InviteModal.js";
import MemberCard from "./MemberCard";
import Carousel from "../shared/Carousel";
import {
	UserAddOutlined
  } from '@ant-design/icons';

function MembersList(props) {
	const [showModal, setShowModal] = useState(false);
	const { userRole } = useContext(UserContext);
	const uid = useSelector((state) => state.User.userId);

	const openInviteModal = () => {
		props.createInvite(props.team.id, props.team.name, props.team.organization_id, uid);
		setShowModal(true);
	};

	return (
		<>
			<div className="dashboard-header">
				<h2>Members ({props.teamMembers.length})</h2>
				{userRole === 1 ? null : (
					// <Button
					// 	style={{ color: "#6954EA", border: "hidden", fontSize: "1rem", textAlign: "left",  borderStyle:"none", backgroundColor:"transparent",boxShadow:"none" }}
						
					// 	className="adding-button"
					// 	onClick={openInviteModal}>
						
					// </Button>
					<UserAddOutlined style={{fontSize:"1.6rem", color: "#6954EA"}} onClick={openInviteModal} />
				)}
			</div>
			<Carousel component={MemberCard} data={props.teamMembers} />
			<InviteModal isVisible={showModal} setVisibility={setShowModal} team={props.team} />
		</>
	);
}

const mapStateToProps = (state) => ({
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
});

const mapActionsToProps = {
	createInvite,
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);
