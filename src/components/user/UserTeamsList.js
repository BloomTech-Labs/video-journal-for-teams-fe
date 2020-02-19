import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import TeamCard from "./UserTeamsCard";
import { Layout, Typography, Modal, Button, Form, Input, Card, Icon } from 'antd';
import { fetchUserTeams } from '../../redux/actions/userActions';
import { createTeam } from "../../redux/actions/teamActions";

const { Title } = Typography;
const { Header, Content } = Layout;

const TeamList = props => {
	const [team, setTeam] = useState({});
	const [showModal, setShowModal] = useState(false)

	let history = useHistory();

	useEffect(() => {
		props.fetchUserTeams(props.id)
	}, [props.id])

	const handleInput = (e) => {
		setTeam({ ...team, [e.target.name]: e.target.value });
	};

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const handleOk = () => {
		props.createTeam(team, history);
		toggleModal();
	}

	return (
		<Content className="userDashList">
			<Card className="add-team">
				<Button onClick={toggleModal} type="primary" shape="circle">
				<Icon type="plus-circle" theme="filled" />
				</Button>
				<p>Create a team</p>
			</Card>
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
			{
				props.isFetching ? "Loading..." : props.teams.map(data => {
					return <TeamCard key={data.id} data={data} />;
				})
			}
		</Content>
	);
};

const mapStateToProps = (state) => {
	return {
		teams: state.User.teams,
		id: state.User.userId,
		isFetching: state.User.isFetching
	}
}

const mapActionsToProps = {
	createTeam,
	fetchUserTeams
};

export default connect(mapStateToProps, mapActionsToProps)(TeamList);