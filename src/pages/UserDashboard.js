import React, {useEffect} from 'react';
import { connect } from "react-redux";

import NavAndHeader from "../components/nav/NavAndHeader";
import TeamList from '../components/user/UserTeamsList';
import Carousel from "../components/shared/Carousel";
import UserVideosCard from "../components/user/UserVideosCard";

import { fetchUserVideos } from '../redux/actions/userActions';

function UserDashboard(props) {
	const { id, fetchUserVideos } = props

	useEffect(() => {
		fetchUserVideos(id)
	}, [id, fetchUserVideos])

	return (
		<NavAndHeader>
			<div className="user-dashboard">
				<h1>Dashboard</h1>
				<h3>My&nbsp;Teams</h3>
				<TeamList />
				<h3>My&nbsp;Videos</h3>
				<Carousel component={UserVideosCard} data={props.videos} name={"videos"}/>
			</div>
		</NavAndHeader>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.User.username,
		videos: state.User.videos,
		id: state.User.userId
	}
}

export default connect(mapStateToProps, {fetchUserVideos})(UserDashboard);
