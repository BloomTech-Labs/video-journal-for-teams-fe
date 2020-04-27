import React, { useEffect } from 'react';
import { connect } from "react-redux";

import NavAndHeader from "../components/nav/NavAndHeader";
import TeamList from '../components/user/UserTeamsList';
import Carousel from "../components/shared/Carousel";
import UserVideosCard from "../components/user/UserVideosCard";
import Organization from "../components/organization/Organization";

import { fetchUserVideos } from '../redux/actions/userActions';
import { clearError } from '../redux/actions/teamActions';

function UserDashboard(props) {
	const { id, fetchUserVideos, videos, clearError, organizations, defaultOrganization, selectedOrganization } = props

	let organization_id = ""

	if (typeof selectedOrganization === "undefined" || typeof defaultOrganization === "undefined") {
		organization_id = "";
	} else {
		organization_id = selectedOrganization.id ? selectedOrganization.id : defaultOrganization.id;
	}

	console.log('org id id ididi',organization_id)
	useEffect(() => {
		clearError();
		fetchUserVideos(id, organization_id)
	}, [id, fetchUserVideos, organization_id , defaultOrganization, selectedOrganization])

 console.log('ddddd',videos)
	return (
		<NavAndHeader>
			<div className="user-dashboard dashboard">
				<h1>Dashboard</h1>
				{ organizations.length >= 1 ? (<><TeamList /> 
				<div className="dashboard-header">
					<h2>My&nbsp;Videos</h2>
				</div>
				<Carousel component={UserVideosCard} data={videos} name={"videos"} /> </>)
				: <Organization /> }
			</div>
		</NavAndHeader>
	)
}


const mapStateToProps = (state) => {
	return {
		username: state.User.username,
		videos: state.User.videos,
		id: state.User.userId,
		organizations: state.User.organizations,
		defaultOrganization: state.User.defaultOrganization,
		selectedOrganization: state.User.selectedOrganization,
	}
}

export default connect(mapStateToProps, { fetchUserVideos, clearError })(UserDashboard);
