import React from 'react';
import { connect } from "react-redux";

import NavAndHeader from "../components/nav/NavAndHeader";
import TeamList from '../components/user/UserTeamsList';
import UserVideos from "../components/user/UserVideosList";

import { Card } from 'antd';

function UserDashboard() {

	return (
		<NavAndHeader>
			<div className="user-dashboard">
				<h1>Dashboard</h1>
				{/* <Card title="Your Teams" style={{ margin: "20px" }}> */}
					<TeamList />
				{/* </Card> */}
				<Card title="Your Videos" style={{ margin: "20px" }}>
					<UserVideos />
				</Card>
			</div>
		</NavAndHeader>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.User.username,
	}
}

export default connect(mapStateToProps, {})(UserDashboard);
