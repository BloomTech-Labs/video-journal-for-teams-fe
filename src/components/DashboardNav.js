import React from 'react'
import { Layout, Menu, Icon, Typography } from 'antd';

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
						<Icon type="user" />
						<span>Home</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="video-camera" />
						<span>Settings</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="upload" />
						<span>Profile</span>
					</Menu.Item>
				</Menu>
			</Sider>
		</>
	)
}

export default DashboardNav
