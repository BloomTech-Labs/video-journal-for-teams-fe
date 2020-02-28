import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { fetchUserVideos, restartRecording } from "../../redux/actions/userActions";

//Components
import UserVideosCard from "./UserVideosCard";

import { Empty } from "antd"

function UserVideos({ fetchUserVideos, id, videos }) {
	console.log(13, videos);
	useEffect(() => {
		fetchUserVideos(id)
	}, [id, fetchUserVideos])

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
	}
}

export default connect(mapStateToProps, { fetchUserVideos, restartRecording })(UserVideos);
