import React from "react";

// Components
import DownloadVideo from "../DownloadVideo";

import { Button } from "antd";

//* Video controls for playback
//* Ability to download video if the client wants to keep it on their machine - DownloadVideo

function PlaybackControls({ restartRecording }) {
	return (
		<div className="playback-stream-controls">
			<Button onClick={restartRecording} style={{ margin: "8px" }} icon="reload">
				<span>Restart</span>
			</Button>
			<DownloadVideo />
		</div>
	);
}

export default PlaybackControls;
