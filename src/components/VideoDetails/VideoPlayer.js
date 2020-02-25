import React from "react";

import { RemoteServeDir } from "../utils/RemoteServeDir";

function VideoPlayer({ video, width }) {
	return (
		<div className="video-player">
			<h2 className="video-player__header">{video.video_title}</h2>
			<h4 className="video-player__subheading">
				By {video.owner_name}, posted {Date(video.created_at)}
			</h4>
			<video  className="actual-player"src={`${RemoteServeDir}/videos/${video.video_url}`} controls></video>
		</div>
	);
}

export default VideoPlayer;
