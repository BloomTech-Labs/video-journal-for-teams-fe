import React from 'react';
import { useHistory } from "react-router";
import 'antd/dist/antd.css';
import { Icon } from 'antd';

const ProfileCarousel = (props) => {
	let history = useHistory();

	const handleRedirect = () => {
		history.push('/user-dashboard');
	}

	return (
		<>
			<div className="jumbotron">
				<div className="container">
					<span className="breadcrumb" onClick={handleRedirect}><Icon type="left" /> Dashboard</span>
				</div>
			</div>
		</>
	)
}

export default ProfileCarousel
