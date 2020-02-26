import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { fetchUserVideos, restartRecording } from "../../redux/actions/userActions";

//Components
import UserVideosCard from "./UserVideosCard";

function UserVideos({fetchUserVideos, id, videos}) {

	useEffect(() => {
		fetchUserVideos(id)
	}, [id, fetchUserVideos])

	return (
		<div className="user-videos-list">
			{videos.map(video => <UserVideosCard key={video.id} data={video}/>)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		videos: state.User.videos,
		id: state.User.userId,
	}
}

export default connect(mapStateToProps, { fetchUserVideos, restartRecording })(UserVideos);
