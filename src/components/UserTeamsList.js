import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TeamCard from "./UserTeamsCard";
import { Layout, Typography, Modal, Button, Form, Input } from 'antd';
import { fetchUserTeams } from '../redux/actions/userActions';

const { Title } = Typography;
const { Header, Content } = Layout;


const TeamList = props => {
	const [teams, setTeams] = useState([]);
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

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const handleOk = () => {
		toggleModal()
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
								<Input />
							</Form.Item>
							<Form.Item label="Team Description">
              <Input />
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

export default connect(mapStateToProps, {fetchUserTeams})(TeamList);