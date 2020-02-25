import React, {useState} from "react";

// Components
import { Button } from "antd";

//* Satisfies the requirement for:
//* start / stop / pause / continue stream
//* Toggle live feed visibility

function StreamControls({ mediaRecorder, streamElementHandle }) {
	const [visibleFeed, setVisibleFeed] = useState(true);
	const [recording, setRecording] = useState(false);
	const [paused, setPaused] = useState(false);

	function startRecording() {
		if (mediaRecorder && mediaRecorder.state === "inactive") {
			mediaRecorder.start();
			setRecording(true);
		}
	}

	function stopRecording() {
		if ((mediaRecorder && mediaRecorder.state === "recording") || (mediaRecorder && mediaRecorder.state === "paused")) {
			setRecording(false);
			mediaRecorder.stop();
		}
	}

	function pauseRecording() {
		if (mediaRecorder && mediaRecorder.state === "recording") {
			setPaused(true);
			mediaRecorder.pause();
		}
	}

	function resumeRecording() {
		if (mediaRecorder && mediaRecorder.state === "paused") {
			setPaused(false);
			mediaRecorder.resume();
		}
	}

	function toggleFeedVisibility() {
		setVisibleFeed(!visibleFeed)
		streamElementHandle.current.hidden = !streamElementHandle.current.hidden;
	}

	return (
		<div className="record-stream-controls">
			<Button onClick={startRecording} style={{display: recording === true ? "none" : "flex", margin: "8px"}}  icon="video-camera">
				Start Recording
			</Button>
			<Button onClick={pauseRecording} style={{display: recording === true && paused === false ? "flex" : "none", margin: "8px"}}icon="pause-circle">
				Pause Recording
			</Button>
			<Button onClick={resumeRecording} style={{display: recording === true && paused === true ? "flex" : "none", margin: "8px"}} icon="play-circle">
				Resume Recording
			</Button>
			<Button onClick={stopRecording} style={{display: recording === true ? "flex" : "none", margin: "8px"}} icon="stop">
				End Recording
			</Button>
			<Button onClick={toggleFeedVisibility} style={{ margin: "8px" }} icon={visibleFeed ? "eye-invisible" : "eye"}>
				Toggle Live Feed
			</Button>
		</div>
	);
}

export default StreamControls;
