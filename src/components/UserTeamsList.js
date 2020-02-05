import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TeamCard from "./UserTeamsCard";
import { Layout, Typography, Modal, Button, Form, Input } from 'antd';
import { fetchUserTeams } from '../redux/actions/userActions';
import { createTeam } from "../redux/actions/teamActions";

const { Title } = Typography;
const { Header, Content } = Layout;


const TeamList = props => {
	const [team, setTeam] = useState({});
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		console.log(props)
		props.fetchUserTeams(props.id)
	},[props.id])

	// useEffect(() => {
	//     if (props.teams.length === 0) {
	//         console.log(props.teams)
	//         props.fetchTeams();
	//     }
	// }, [props, props.teams]);

	// if (props.teams.length === 0) {
	//     return <h2>Loading...</h2>;
	// } else {

	const handleInput = (e) => {
			setTeam({ ...team, [e.target.name]: e.target.value });
		};

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const handleOk = () => {
		props.createTeam(team);
		toggleModal();
	}

	return (
		<Content className="userDashList">
			<button onClick={toggleModal}>Create Team</button>
			<Modal
          title="Create New Team"
					visible={showModal}
					onOk={handleOk}
					onCancel={toggleModal}
					okText="Create Team"
        >
					<Form layout="vertical">
						<Form.Item label="Team Name">
								<Input onChange={handleInput} name="name"/>
							</Form.Item>
							<Form.Item label="Team Description">
              <Input onChange={handleInput} name="description"/>
            </Form.Item>
					</Form>
				</Modal>
			{props.teams.map(data => {
				return <TeamCard key={data.id} data={data} />;
			})}
		</Content>
	);
	// }
};

const mapStateToProps = (state) => {
	console.log(state)
	return {
		teams: state.User.teams,
		id: state.User.userId
	}
}

const mapActionsToProps = {
	createTeam,
	fetchUserTeams
};

export default connect(mapStateToProps, mapActionsToProps)(TeamList);