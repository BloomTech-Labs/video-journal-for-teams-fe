import React from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import TeamList from './UserTeamsList';
import { Layout, Tooltip, Avatar, Typography, Card, Icon, Button } from 'antd';

import { logoutUser } from "../redux/actions/userActions";

import UserVideos from "./UserVideosList"
const { Title } = Typography;

const { Header, Content } = Layout;

function UserDashboardContent(props) {
	let history = useHistory();

	const handleLogout = (e) => {
		e.preventDefault();
		props.logoutUser();
		history.push("/");
	}

	return (
		<Layout>
			{/* user dash content area */}
			<Header className="userDashHeader">
				<div className="userDashContentHeader">
					<Title level={4}>{props.username}</Title>
					<Tooltip placement="left" title="username here">
						{/* change src below for image */}
						<Avatar size="large" icon="user" src="" />
					</Tooltip>
				</div>
			<Button onClick={handleLogout}>
				<Icon type="logout" style={{ fontSize: '32px' }} />
			</Button>
			</Header>
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

const mapActionsToProps = {
  logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(UserDashboardContent);
