import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import TeamCard from "./UserTeamsCard";
import { Modal, Button, Form, Input, Card, Icon } from 'antd';
import { fetchUserTeams } from '../../redux/actions/userActions';
import { createTeam } from "../../redux/actions/teamActions";
import Carousel from "../shared/Carousel";

const TeamList = ({ id, teams, fetchUserTeams, createTeam , defaultOrganization, selectedOrganization}) => {
	const [team, setTeam] = useState({});
	const [showModal, setShowModal] = useState(false)
	const organization_id = selectedOrganization.id ? selectedOrganization.id  : defaultOrganization.id
	let history = useHistory();


	
	
	useEffect(() => {
		fetchUserTeams(id, organization_id)
	}, [id, fetchUserTeams, organization_id])

	const handleInput = (e) => {
		setTeam({ ...team, [e.target.name]: e.target.value, organization_id: organization_id });
	};

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const handleOk = () => {
		createTeam(team, history);
		toggleModal();
	}

	return (
		<>
			<div className="dashboard-header">
				<h2>My&nbsp;Teams</h2>
			</div>
			<Carousel component={TeamCard} data={teams} name={"videos"}>
				<Button className="add-team" onClick={toggleModal}>
					<Card>
						<div>
							<Icon type="plus-circle" theme="filled" />
						</div>
						<p>Create a team</p>
					</Card>
				</Button>
				<Modal
					title="Create New Team"
					visible={showModal}
					onOk={handleOk}
					onCancel={toggleModal}
					okText="Create Team"
				>
					<Form layout="vertical">
						<Form.Item label="Team Name">
							<Input onChange={handleInput} name="name" />
						</Form.Item>
						<Form.Item label="Team Description">
							<Input onChange={handleInput} name="description" />
						</Form.Item>
					</Form>
				</Modal>
			</Carousel>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		teams: state.User.teams,
		id: state.User.userId,
		isFetching: state.User.isFetching,
		//organization_id: state.User.organization_id,
		defaultOrganization: state.User.defaultOrganization,
		selectedOrganization: state.User.selectedOrganization
	}
}

const mapActionsToProps = {
	fetchUserTeams,
	createTeam
};

export default connect(mapStateToProps, mapActionsToProps)(TeamList);
