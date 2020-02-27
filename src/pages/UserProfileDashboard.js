import React from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import ProfileContent from '../components/profile/ProfileContent';
import ProfileJumbtron from '../components/profile/ProfileJumbotron';
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function EditUserDashboard() {
	return (
		<>
			<Layout>
				<Header className="full-header">
					<Title level={3} className={"userDashHeaderFont"}>Alpaca Vids</Title>
				</Header>
				<ProfileJumbtron />
				<Content className="profile-page">
					<ProfileContent />
				</Content>
				<Footer>Squid Syskey Productions &copy; Copyright</Footer>
			</Layout>
		</>
	)
}

export default EditUserDashboard
