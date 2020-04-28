import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { fetchUserVideos, restartRecording } from "../../redux/actions/userActions";

//Components
import UserVideosCard from "./UserVideosCard";
import {socket} from '../../socket/socket'
import { Empty } from "antd"

function UserVideos({ fetchUserVideos, id, videos, organizations,defaultOrganization,selectedOrganization }) {


	let organization_id = ""

		if (typeof selectedOrganization === "undefined" || typeof defaultOrganization === "undefined") {
			organization_id = "";
		} else {
			organization_id = selectedOrganization.id ? selectedOrganization.id : defaultOrganization.id;
		}


	useEffect(() => {
		fetchUserVideos(id, organization_id)
	}, [id, fetchUserVideos])
	
	useEffect(() => {
		socket.on('insertedFeedback', () => {
			fetchUserVideos(id, organization_id)
		})

	}, [])
	
	return (
		<div className="user-videos-list">
			{videos.length > 0
				? videos.map(video => <UserVideosCard key={video.id} data={video} />)
				: <Empty />
			}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		videos: state.User.videos,
		id: state.User.userId,
		organizations: state.User.organizations,
		defaultOrganization: state.User.defaultOrganization,
		selectedOrganization: state.User.selectedOrganization,
	}
}

export default connect(mapStateToProps, { fetchUserVideos, restartRecording })(UserVideos);
