import React from 'react'
import { Layout, Menu, Icon, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Sider } = Layout;
const { Title } = Typography;

function DashboardNav() {

	const navHeaderStyles = {
		background: 'rgba(255, 255, 255, 0.2)',
		padding: '16px',
		marginBottom: "32px",
		height: "64px",
		textAlign: "center"
	}

	const navHeaderFontStyles = {
		color: '#fff',
		marginBottom: 0
	}
	
	const menuStyles ={
		textAlign: "left",
		margin: "0 auto"
	}

	return (
		<>
			<Sider>
				<div style={{...navHeaderStyles}}>
					<Title level={3} style={{...navHeaderFontStyles}}>Alpaca Vids</Title>
				</div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{...menuStyles}}>
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
