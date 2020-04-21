import React, { useEffect, useState } from "react";
import { Layout, Menu, Icon, Typography, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserOrganizations, fetchUserTeams, setUserSelectedOrganization } from "../../redux/actions/userActions";
const { Sider } = Layout;
const { Title } = Typography;
const DashboardNav = withRouter((props) => {
	// Use location from router as a key to show that link is selected.
	const {
		location,
		organization_id,
		organizations,
		userId,
		fetchUserOrganizations,
		defaultOrganization,
		selectedOrganization,
		fetchUserTeams,
		setUserSelectedOrganization
	} = props;


	// const [selectedOrganization, setSelectedOrganization]=useState(organizations[0].name);


	useEffect(() => {
		fetchUserOrganizations(userId);
		console.log('hi')
	}, []);

	function handleClick(item){
		setUserSelectedOrganization(item)
		console.log(item)
		console.log('hello')
	}
	
	const menu = (
		<Menu>
			{organizations.map((item) => (
				<Menu.Item key={item.id} onClick={()=> handleClick(item)} >        
					{item.name}
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<>
			<Sider breakpoint="lg" collapsedWidth="0" width="240">
				<div className={"userDashHeader"}>
					<Title level={3}>
						<Link to="/user-dashboard" className={"userDashHeaderFont"} style={{ marginTop: "12px" }}>
							Alpaca&nbsp;Vids
						</Link>
					</Title>
				</div>
				<Menu theme="dark" mode="inline" className={"userDashMenu"} selectedKeys={[location.pathname]}>
					<Dropdown overlay={menu}>
						<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
						 {
							   defaultOrganization ? "undefined"  :  'hello' 
							
								}

								// (selectedOrganization.name ? selectedOrganization.name : defaultOrganization.name) :
								
							<DownOutlined />
						</a>
					</Dropdown>
					
					<hr style={{ margin: "40px 0" }} />
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
					<Menu.Item key="/teams" disabled>
						<Icon type="calendar" theme="filled" /> My Teams
					</Menu.Item>
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
	organization_id: state.User.organization_id,
	userId: state.User.userId,
	organizations: state.User.organizations,
	defaultOrganization: state.User.defaultOrganization,
	selectedOrganization: state.User.selectedOrganization,
});

const mapActionsToProps = {
	fetchUserOrganizations,
	fetchUserTeams,
	setUserSelectedOrganization 
};
export default connect(mapStateToProps, mapActionsToProps)(DashboardNav);
