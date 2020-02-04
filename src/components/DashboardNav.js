import React from 'react'
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

function DashboardNav() {

	return (
		<>
			<Sider>
				<div className={"userDashHeader"}>
					<Title level={3} className={"userDashHeaderFont"}>Alpaca Vids</Title>
				</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={"userDashMenu"}>
					<Menu.Item key="1">
						<Icon type="home" />
						<span><Link to="user-dashboard">Dashboard</Link></span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="calendar" />
						<span><Link to="/teams">My Teams</Link></span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="play-circle" />
						<span>My Videos</span>
					</Menu.Item>
					<Menu.Item key="4">
						<Icon type="setting" />
						<span>Teams Settings</span>
					</Menu.Item>
					
					<hr style={{margin: "40px 0"}}/>

					<h3 style={{ color: "white", paddingLeft: "24px", paddingBottom: "20px"}}>Team Controls</h3>
					<Menu.Item key="5">
						<Icon type="calendar" />
						<span>Manage Teams</span>
					</Menu.Item>
					<Menu.Item key="6">
						<Icon type="folder" />
						<span>Team Archive</span>
					</Menu.Item>
					<Menu.Item key="7">
						<Icon type="setting" />
						<span>Teams Settings</span>
					</Menu.Item>
				</Menu>
			</Sider>
		</>
	)
}

export default DashboardNav
