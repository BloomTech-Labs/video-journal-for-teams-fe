import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import UserVideosCard from "./UserVideosCard";
import { fetchUserVideos } from '../redux/actions/userActions';

const { Header, Content } = Layout;


function UserVideos(props) {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		props.fetchUserVideos(props.id)
	},[])

	return (
<Content className="userDashList">
			{props.videos.map(data => (
				<UserVideosCard data={data} key={data.video_id} />
			))}
		</Content>
	)
}

const mapStateToProps = (state) => {
	return {
		videos: state.User.videos,
		id: state.User.id
	}
}

export default connect(mapStateToProps, {fetchUserVideos})(UserVideos);
