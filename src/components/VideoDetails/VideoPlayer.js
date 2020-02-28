import React from "react";

import { RemoteServeDir } from "../utils/RemoteServeDir";

function VideoPlayer({ video, width }) {
	console.log(RemoteServeDir)
	return (
		<div className="video-details">
			<div className="video-player">
				<h2 className="video-player__header">{video.video_title}</h2>
				<h4 className="video-player__subheading">
					By {video.owner_name}, posted {Date(video.created_at)}
				</h4>
				<video  className="actual-player"src={`${process.env.REACT_APP_S3_STORAGE_PATH}${video.video_url}`} controls></video>
			</div>
		</div>
	);
}

export default VideoPlayer;
