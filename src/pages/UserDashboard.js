import React from 'react'
import { Layout } from 'antd';
import DashboardNav from '../components/DashboardNav';
import UserDashboardContent from '../components/UserDashboardContent';

import { connect } from "react-redux";

import { Redirect } from 'react-router-dom';

function UserDashboard(props) {
		return (
			<>
				<Layout>
					<DashboardNav />
					<UserDashboardContent />
				</Layout>
			</>
		)
}

const mapStateToProps = (state) => ({
	invited_team_id: state.User.invite.invited_team_id,
	invite_code: state.User.invite.invite_code,
	user_id: state.User.userId
});

export default connect(mapStateToProps, {})(UserDashboard);
