import React, { useEffect, useState } from "react";
import { Layout, Menu, Typography, Dropdown } from "antd";
import { DownOutlined, BankOutlined } from "@ant-design/icons";
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

const DashboardNav = withRouter((props) => {
	// Use location from router as a key to show that link is selected.
	const {
		location,
		// organization_id,
		organizations,
		userId,
		fetchUserOrganizations,
		defaultOrganization,
		selectedOrganization,
		fetchUserTeams,
		setUserSelectedOrganization,
	} = props;
	const { Sider } = Layout;
	const { Title } = Typography;
	const [showModal, setShowModal] = useState(false);
	const history = useHistory();

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
		<Menu theme="dark">
			{organizations.map((item) => (
				<Link to="/user-dashboard">
					<Menu.Item style={{ textAlign: "center" }} key={item.id} onClick={() => handleClick(item)}>
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
		<>
			<Sider breakpoint="lg" collapsedWidth="0" width="240">
				<div className={"userDashHeader"}>
					<Title level={3}>
						<Link to="/user-dashboard" className={"userDashHeaderFont"} style={{ marginTop: "12px" }}>
							Team&nbsp;Reel
						</Link>
					</Title>
				</div>
				<Menu theme="dark" mode="inline" className={"userDashMenu"} selectedKeys={[location.pathname]}>
					<Dropdown overlay={menu}>
						<a
							className="ant-dropdown-link"
							onClick={(e) => e.preventDefault()}
							style={{ display: "block", width: "500" }}>
							<div style={{ paddingLeft: "25px", color: "white", width: "200px", textOverflow: "ellipsis" }}>
								<BankOutlined style={{ paddingRight: "16px" }} />
								{typeof defaultOrganization !== "undefined"
									? selectedOrganization.name
										? selectedOrganization.name
										: defaultOrganization.name
									: "Create an Organization"}{" "}
								<DownOutlined />
							</div>
						</a>
					</Dropdown>
					<hr style={{ margin: "25px 0" }} />
					<Menu.Item key="/user-dashboard">
						<Link to="/user-dashboard" style={{ color: "#fff", display: "block" }}>
							<Icon type="home" theme="filled" /> Dashboard
						</Link>
					</Menu.Item>
					<Menu.Item key="/profile">
						<Link to="/profile" style={{ color: "#fff", display: "block" }}>
							<Icon type="user" /> My Profile
						</Link>
					</Menu.Item>
					<Menu.Item key="/videos">
						<Link to="/videos" style={{ color: "#fff", display: "block" }}>
							<Icon type="play-circle" theme="filled" /> My Videos
						</Link>
					</Menu.Item>

					{filteredOrg.length > 0 && filteredOrg[0].role_id === 3 ? (
						<Menu.Item key="/teams">
							<Link to={`/organizations/${organization_id}/teams`} style={{ color: "#fff", display: "block" }}>
								<Icon type="calendar" theme="filled" /> All Teams
							</Link>
						</Menu.Item>
					) : null}

					{filteredOrg.length > 0 && filteredOrg[0].role_id === 3 ? (
						<Menu.Item key="/users">
							<Link to={`/organizations/${organization_id}/users`} style={{ color: "#fff", display: "block" }}>
								<Icon type="calendar" theme="filled" /> All Users
							</Link>
						</Menu.Item>
					) : null}
					<Menu.Item key="/setting" disabled>
						<Icon type="setting" theme="filled" />
						Teams Settings
					</Menu.Item>
					<hr style={{ margin: "40px 0" }} />
					<h3 style={{ color: "white", paddingLeft: "24px", paddingBottom: "20px" }}>Team Controls</h3>
					<Menu.Item key="/manage-teams" disabled>
						<Icon type="calendar" theme="filled" />
						<span>Manage Teams</span>
					</Menu.Item>
					<Menu.Item key="/team-archive" disabled>
						<Icon type="folder" theme="filled" />
						<span>Team Archive</span>
					</Menu.Item>
				</Menu>
			</Sider>
		</>
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
