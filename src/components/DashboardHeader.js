import React from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout, Tooltip, Avatar, Typography, Button, Icon} from 'antd';
import { logoutUser } from "../redux/actions/userActions";

const { Title } = Typography;
const { Header, Content } = Layout;

function DashboardHeader(props) {
  let history = useHistory();

	const handleLogout = (e) => {
		e.preventDefault();
		props.logoutUser();
		history.push("/");
	}

  return (
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

export default connect(mapStateToProps, mapActionsToProps)(DashboardHeader);