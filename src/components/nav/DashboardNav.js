import React, { useEffect, useState } from "react";
import { Layout, Menu, Typography, Dropdown } from "antd";
import { BankOutlined, DownOutlined } from "@ant-design/icons";
import { Link, withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
	fetchUserOrganizations,
	fetchUserTeams,
	setUserSelectedOrganization,
	createUserOrganization,
} from "../../redux/actions/userActions";
import { Modal, Button, Form, Input, Card, Icon } from "antd";
import Organization from "../organization/Organization.js";
import logo from "../../imgs/TeamReel.png";
import { useLocation } from "react-router-dom";
import { PieChartFilled } from "@ant-design/icons";

// const { SubMenu } = Menu;
const DashboardNav = withRouter((props) => {
	// Use location from router as a key to show that link is selected.
	const {
		// location,
		// organization_id,
		organizations,
		userId,
		fetchUserOrganizations,
		defaultOrganization,
		selectedOrganization,
		fetchUserTeams,
		setUserSelectedOrganization,
		children,
	} = props;

	const { Sider } = Layout;
	const { Title } = Typography;
	const [showModal, setShowModal] = useState(false);
	const location = useLocation();

	let organization_id = "";

	if (typeof selectedOrganization === "undefined" || typeof defaultOrganization === "undefined") {
		organization_id = "";
	} else {
		organization_id = selectedOrganization.id ? selectedOrganization.id : defaultOrganization.id;
	}

	function handleClick(item) {
		setUserSelectedOrganization(item);
		// history.push('/user-dashboard');
	}

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	let filteredOrg = organizations.filter((x) => x.id === organization_id);

	const menu = (
		<Menu>
			{organizations.map((item) => (
				<Link key={item.id} to="/user-dashboard">
					<Menu.Item style={{ textAlign: "center", color: "#FF7F50" }} key={item.id} onClick={() => handleClick(item)}>
						{item.name}
					</Menu.Item>
				</Link>
			))}
			<Menu.Item>
				<Organization />
			</Menu.Item>
		</Menu>
	);

	return (
		<Sider breakpoint="lg" collapsedWidth="0" width="240" style={{ backgroundColor: "#6954EA" }}>
			<div className={"userDashHeader"} style={{ backgroundColor: "#6954EA" }}>
				<Title level={3}>
					<Link
						to="/user-dashboard"
						className={"userDashHeaderFont"}
						style={{ color: "whitesmoke", marginTop: "12px" }}>
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>	
						
					</Link>
				</Title>
			</div>
			<Menu style={{ backgroundColor: "#6954EA" }} mode="inline" className={"userDashMenu"}>
				<Dropdown overlay={menu} trigger="click">
					<a
						className="ant-dropdown-link"
						onClick={(e) => e.preventDefault()}
						style={{ display: "block", width: "500" }}>
						<div style={{ paddingLeft: "25px", color: "white", width: "200px", textOverflow: "ellipsis" }}>
							<BankOutlined style={{ paddingRight: "16px" }} />
							{selectedOrganization.hasOwnProperty("name")
								? selectedOrganization.name
								: defaultOrganization
								? defaultOrganization.name
								: ""}
							<DownOutlined />
						</div>
					</a>
				</Dropdown>


				<hr style={{ margin: "25px 0" }} />
				<Menu.Item key="/user-dashboard">
					<Link to="/user-dashboard" style={{ backgroundColor: "#6954EA", color: "#fff", display: "block" }}>
						<Icon type="home" theme="filled"/> Dashboard
					</Link>
				</Menu.Item>
				<Menu.Item key="/profile">
					<Link to="/profile" style={{ color: "#FFF", display: "block" }}>
						<Icon type="user" /> My Profile
					</Link>
				</Menu.Item>
				<Menu.Item key="/videos">
					<Link to="/videos" style={{ color: "#FFF", display: "block" }}>
						<Icon type="play-circle" theme="filled" /> My Videos
					</Link>
				</Menu.Item>

				{filteredOrg.length > 0 && filteredOrg[0].role_id === 3 ? (
					<Menu.Item key="/teams">
						<Link to={`/organizations/${organization_id}/teams`} style={{ color: "#FFF", display: "block" }}>
							<Icon type="calendar" theme="filled" /> All Teams
						</Link>
					</Menu.Item>
				) : null}

				{filteredOrg.length > 0 && filteredOrg[0].role_id === 3 ? (
					<Menu.Item key="/users">
						<Link to={`/organizations/${organization_id}/users`} style={{ color: "#FFF", display: "block" }}>
							<Icon type="calendar" theme="filled" /> All Users
						</Link>
					</Menu.Item>
				) : null}
				<Menu.Item key="/results">
					<Link to="/results" style={{ backgroundColor: "#6954EA", color: "#fff", display: "block" }}>
						<PieChartFilled /> My Results
					</Link>
				</Menu.Item>
				<hr style={{ margin: "40px 0" }} />
				{/* <Menu.Item key="/setting" disabled>
					<Icon type="setting" theme="filled" />
					Teams Settings
				</Menu.Item>
				
				<h3 style={{ color: "white", paddingLeft: "24px", paddingBottom: "20px" }}>Team Controls</h3>
				<Menu.Item key="/manage-teams" disabled>
					<Icon type="calendar" theme="filled" />
					<span>Manage Teams</span>
				</Menu.Item>
				<Menu.Item key="/team-archive" disabled>
					<Icon type="folder" theme="filled" />
					<span>Team Archive</span>
				</Menu.Item> */}
			</Menu>
		</Sider>
	);
});
const mapStateToProps = (state) => ({
	// organization_id: state.User.organization_id,
	userId: state.User.userId,
	organizations: state.User.organizations,
	defaultOrganization: state.User.defaultOrganization,
	selectedOrganization: state.User.selectedOrganization,
});
const mapActionsToProps = {
	fetchUserOrganizations,
	fetchUserTeams,
	setUserSelectedOrganization,
};
export default connect(mapStateToProps, mapActionsToProps)(DashboardNav);

//hi
