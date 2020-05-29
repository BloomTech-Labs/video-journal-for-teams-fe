import React from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import ProfileContent from '../components/profile/ProfileContent';
import ProfileJumbtron from '../components/profile/ProfileJumbotron';
import teamReel from '.././imgs/TeamReel.png'; 
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function EditUserDashboard() {
	return (
		<>
			<Layout>
				<Header className="full-header">
					<div className="title">
						<img src={teamReel} alt="team reel logo"/>
					</div>
					
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
