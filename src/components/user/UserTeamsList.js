import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import TeamCard from "./UserTeamsCard";
import { Modal, Button, Form, Input, Card, Icon } from "antd";
import { fetchUserTeams } from "../../redux/actions/userActions";
import { createTeam } from "../../redux/actions/teamActions";
import Carousel from "../shared/Carousel";
import { Select } from "antd";

const TeamList = ({
	id,
	teams,
	fetchUserTeams,
	createTeam,
	defaultOrganization,
	selectedOrganization,
	organizations,
	team,
}) => {
	const [teamData, setTeamData] = useState({ name: "", description: "", team_type: "private" });
	const [showModal, setShowModal] = useState(false);
	let history = useHistory();
	// const uid = useSelector((state) => state);

	let organization_id = "";

	if (typeof selectedOrganization === "undefined" || typeof defaultOrganization === "undefined") {
		organization_id = "";
	} else {
		organization_id = selectedOrganization.id ? selectedOrganization.id : defaultOrganization.id;
	}

	let filteredOrg = organizations.filter((x) => x.id === organization_id);

	useEffect(() => {
		fetchUserTeams(id, organization_id);
	}, [id, fetchUserTeams, organization_id, selectedOrganization, defaultOrganization, team]);

	const handleInput = (e) => {
		setTeamData({ ...teamData, [e.target.name]: e.target.value, organization_id: organization_id });
	};

	const handleInput2 = (value) => {
		setTeamData({ ...teamData, team_type: value });
	};

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const handleOk = () => {
		createTeam(teamData, history, id);
		toggleModal();
	};

	const { Option } = Select;

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
				<Modal title="Create New Team" visible={showModal} onOk={handleOk} onCancel={toggleModal} okText="Create Team" okButtonProps={{style:{backgroundColor:"#6954EA",color:"white",border:"none"}}}>
					<Form layout="vertical">
						<Form.Item label="Team Name">
							<Input onChange={handleInput} name="name" />
						</Form.Item>
						<Form.Item label="Team Description">
							<Input onChange={handleInput} name="description" />
						</Form.Item>
						{filteredOrg.length > 0 && filteredOrg[0].role_id === 3 ? (
							<Form.Item label="Select">
								<Select
									name="team_type"
									defaultValue={teamData.team_type}
									style={{ width: 120 }}
									onChange={handleInput2}>
									<Option value="public">Public Team</Option>
									<Option value="private">Private Team</Option>
								</Select>
							</Form.Item>
						) : null}
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
		selectedOrganization: state.User.selectedOrganization,
		organizations: state.User.organizations,
		team: state.Team.team,
	};
};

const mapActionsToProps = {
	fetchUserTeams,
	createTeam,
};

export default connect(mapStateToProps, mapActionsToProps)(TeamList);
