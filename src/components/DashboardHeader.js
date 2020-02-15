import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout, Tooltip, Avatar, Typography, Button, Icon } from "antd";
import { logoutUser } from "../redux/actions/userActions";

const { Title } = Typography;
const { Header, Content } = Layout;

function DashboardHeader(props) {
	let history = useHistory();

	const handleLogout = (e) => {
		e.preventDefault();
		props.logoutUser();
		history.push("/");
	};

	return (
		<Header className="userDashHeader">
			<div className="userDashContentHeader">
				<Title level={4}>{props.fullName}</Title>
				<Tooltip placement="left" title={props.username}>
					{/* change src below for image */}
					<Avatar size="large" icon="user" src={`http://localhost:5000/public/avatars/${props.avatar}`} />
				</Tooltip>
			</div>
			<Button onClick={handleLogout}>
				<Icon type="logout" style={{ fontSize: "32px" }} />
			</Button>
		</Header>
	);
}

const mapStateToProps = (state) => {
	return {
		fullName: `${state.User.first_name} ${state.User.last_name}`,
		username: state.User.username,
		avatar: state.User.avatar
	};
};

const mapActionsToProps = {
	logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(DashboardHeader);
