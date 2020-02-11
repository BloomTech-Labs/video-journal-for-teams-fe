import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamMembers, createInvite, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Modal, Button, Form, Input } from 'antd';
import './teamTest.css';
import MemberCard from './MemberCard';

const { Header, Content } = Layout;

function MembersList(props) {
	let history = useHistory();
	let { team_id } = useParams();

	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		props.fetchTeamMembers(team_id)
	}, []);

	const toggleModal = () => {
		setShowModal(!showModal)
		props.createInvite({ team_id: props.team.id, team_name: props.team.name })
	}

	const handleOk = (e) => {
		toggleModal();
	}

	if (!props.teamMembers) {
		return <h2>Loading...</h2>;
	} else {

		return (
			<Content>
				<p>Members({props.teamMembers.length})</p>
				<Row gutter={[16, 16]}>
					{/* Add member invite link button */}
					<Col span={2}>
						<Button onClick={toggleModal} type="primary" shape="circle" icon="plus-circle" className="add-member" />
						<Modal
							title="Team Invitation Link"
							visible={showModal}
							onOk={handleOk}
							onCancel={toggleModal}
							okText="Okay"
						>
							<Form>
								<Form.Item label="Copy this code link">
									<Input readOnly value={props.inviteLink.link} />
								</Form.Item>
							</Form>
						</Modal>
					</Col>

					{/* Display members */}
					{props.teamMembers.map(member => (
						<Col span={2} key={member.user_id}><MemberCard member={member} /></Col>
					))}
				</Row>
			</Content>
		)
	}
}

const mapStateToProps = (state) => ({
	team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	inviteLink: state.Team.inviteLink,
	deleteUserCount: state.Team.deleteUserCount
});

const mapActionsToProps = {
	fetchTeamMembers,
	createInvite,
	setError,
	clearError
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);