import React from 'react';
import { connect } from "react-redux";
import TeamList from './UserTeamsList';
import { Layout, Tooltip, Avatar, Typography, Card, Icon, Button } from 'antd';
import DashboardHeader from './DashboardHeader';

import UserVideos from "./UserVideosList"
const { Title } = Typography;

const { Header, Content } = Layout;

function UserDashboardContent(props) {

	return (
		<Layout>
			<DashboardHeader />
			<Card title="Your Teams" style={{ margin: "20px" }}>
				<TeamList />
			</Card>
			<Card title="Your Videos" style={{ margin: "20px" }}>
				<UserVideos />
			</Card>
		</Layout>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.User.username,
	}
}

export default connect(mapStateToProps, {})(UserDashboardContent);
