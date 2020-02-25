import React from "react";

// Components
import UploadVideo from "../UploadVideo/UploadVideo";
import DownloadVideo from "../DownloadVideo";

import { Button } from "antd";

//* Video controls for playback
//* Ability to upload video to server and post to a team - UploadVideo
//* Ability to download video if the client wants to keep it on their machine - DownloadVideo

function PlaybackControls({ toggleStreamPlayback }) {
	return (
		<div className="playback-stream-controls">
			<Button onClick={toggleStreamPlayback} style={{ margin: "8px" }}>
				Restart
			</Button>
			<DownloadVideo />
		</div>
	);
}

export default PlaybackControls;
