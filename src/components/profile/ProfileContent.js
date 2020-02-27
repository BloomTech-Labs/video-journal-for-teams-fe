import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

// Components
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm';

const UserProfileContent = () => {

	return (
		<>
			<div className="profile-main">
				<div className="container">
					<Row gutter={20}>
						<Col span={8}><ProfileAvatar /></Col>
						<Col span={16}><ProfileForm /></Col>
					</Row>
				</div>
			</div>
		</>
	)
}

export default UserProfileContent
