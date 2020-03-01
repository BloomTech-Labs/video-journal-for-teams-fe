import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout, Avatar, Popover } from "antd";
import { logoutUser } from "../../redux/actions/userActions";

const { Header } = Layout;

function DashboardHeader(props) {
	let history = useHistory();

	const handleLogout = (e) => {
		e.preventDefault();
		props.logoutUser();
		history.push("/");
	};

	const getInitials = () => {
		return props.fullName.split(" ").map((n)=>n[0]).join("").toUpperCase();
	}

	const content = (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);

	return (
		<Header className="userDashHeader">
			<div className="userDashContentHeader">
				<Popover content={content} trigger="click">
					<Avatar size="large" icon="user" src={`${process.env.REACT_APP_S3_STORAGE_PATH}${props.avatar}`} />
					{<p>{getInitials()}</p>}
				</Popover>
			</div>
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
