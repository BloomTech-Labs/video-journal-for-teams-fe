import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamMembers, createInvite, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Row, Col, Modal, Button, Form, Input } from 'antd';
import './teamTest.css';
import MemberCard from './MemberCard';

const { Header, Content } = Layout;

function MembersList(props) {
	const [showModal, setShowModal] = useState(false)
	const [code, setCode] = useState("");

	let { team_id } = useParams();
	let baseURL = process.env.REACT_APP_FRONT_END_URL || "https://www.alpacavids.com/";
	let URL = baseURL.concat("invite/", code)

	useEffect(() => {
		setCode(props.invite.link)
	}, [props.invite.link]);

	const toggleModal = () => {
		setShowModal(!showModal)
		props.createInvite(team_id, { team_name: props.team.name })
	}

	console.log('Comp invite link', props.invite.link)
	const handleOk = (e) => {
		toggleModal();
		copyLink();
	}

	function copyLink() {
		/* Get the text field */
		var copyText = document.getElementById("team-link");

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		/* Copy the text inside the text field */
		document.execCommand("copy");

		/* Alert the copied text */
		alert(copyText.value + " ...has been copied to clipboard.");
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
						{props.userRole === 1 ? null : (<Button onClick={toggleModal} type="primary" shape="circle" icon="plus-circle" className="add-member" />)}
						< Modal
							title="Team Invitation Link"
							visible={showModal}
							onOk={handleOk}
							onCancel={toggleModal}
							okText="Copy"
						>
							<Form>
								<Form.Item label="Copy Link">
									<Input readOnly id="team-link" value={URL} />
								</Form.Item>
							</Form>
						</Modal>
					</Col>

					{/* Display members */}
					{props.teamMembers.map(member => (
						<Col span={2} key={member.user_id}>
							<MemberCard
								member={member}
								userRole={props.userRole}
							/></Col>
					))}
				</Row>
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
