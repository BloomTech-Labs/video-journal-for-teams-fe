import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import UserVideosCard from "./UserVideosCard";
import { fetchUserVideos } from '../../redux/actions/userActions';

const { Header, Content } = Layout;


function UserVideos(props) {
	useEffect(() => {
		props.fetchUserVideos(props.id)
	}, [props.id])

	return (
		<Content className="card-flex">
			{props.videos.map(video => (
				<UserVideosCard key={video.id} data={video} />
			))}
		</Content>
	)
}

const mapStateToProps = (state) => {
	return {
		videos: state.User.videos,
		id: state.User.userId
	}
}

export default connect(mapStateToProps, { fetchUserVideos })(UserVideos);
