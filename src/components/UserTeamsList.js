import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TeamCard from "./UserTeamsCard";
import { Layout, Typography } from 'antd';
import { fetchUserTeams } from '../redux/actions/userActions';

const { Title } = Typography;
const { Header, Content } = Layout;


const TeamList = props => {
	// const [teams, setTeams] = useState([]);

	useEffect(() => {
		props.fetchUserTeams(props.id)
	},[])

	// useEffect(() => {
	//     if (props.teams.length === 0) {
	//         console.log(props.teams)
	//         props.fetchTeams();
	//     }
	// }, [props, props.teams]);

	// if (props.teams.length === 0) {
	//     return <h2>Loading...</h2>;
	// } else {

	return (
		<Content className="userDashList">
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
		id: state.User.id
	}
}

export default connect(mapStateToProps, {fetchUserTeams})(TeamList);