import React from "react";

// Components
import RecordStream from "../components/PostTeamVideo/RecordStream/RecordStream";
import PlaybackStream from "../components/PostTeamVideo/PlaybackStream/PlaybackStream";
import NavAndHeader from "../components/nav/NavAndHeader";
import { Card } from "antd";

import "../userdash.css";

//* Requirements
//* Ability to capture webcam and audio into a stream - RecordStream
//* Ability to pause/continue/restart recording session - RecordStream/StreamControls
//* Ability to watch video before uploading - PlaybackStream
//* Ability to upload video to server and post to a team - UploadVideo
//* Ability to download video if the client wants to keep it on their machine - DownloadVideo
//* Ability to capture a static image to be used as a thumbnail - TBD - Future canvas

function PostTeamVideo() {
	return (
		<NavAndHeader>
			<Card title="Record and post a new video" style={{ margin: "20px" }}>
				<RecordStream />
				<PlaybackStream />
			</Card>
		</NavAndHeader>
	);
}

export default PostTeamVideo;
