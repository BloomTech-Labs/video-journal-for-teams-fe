import React from 'react';
import { connect } from "react-redux";
import TeamList from './UserTeamsList';
import { Layout, Tooltip, Avatar, Typography, Card } from 'antd';

import UserVideos from "./UserVideosList"
const { Title } = Typography;

const { Header, Content } = Layout;

function UserDashboardContent(props) {

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

export default connect(mapStateToProps, {})(UserDashboardContent);
