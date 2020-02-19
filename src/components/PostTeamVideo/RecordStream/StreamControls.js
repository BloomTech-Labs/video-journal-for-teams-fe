import React from "react";

// Components
import { Button } from "antd";

//* Satisfies the requirement for:
//* start / stop / pause / continue stream
//* Toggle live feed visibility

function StreamControls({ mediaRecorder, streamElementHandle }) {
	function startRecording() {
		if (mediaRecorder && mediaRecorder.state === "inactive") {
			mediaRecorder.start();
		}
	}

	function stopRecording() {
		if ((mediaRecorder && mediaRecorder.state === "recording") || (mediaRecorder && mediaRecorder.state === "paused")) {
			mediaRecorder.stop();
		}
	}

	function pauseRecording() {
		if (mediaRecorder && mediaRecorder.state === "recording") {
			mediaRecorder.pause();
		}
	}

	function resumeRecording() {
		if (mediaRecorder && mediaRecorder.state === "paused") {
			mediaRecorder.resume();
		}
	}

	function toggleFeedVisibility() {
		streamElementHandle.current.hidden = !streamElementHandle.current.hidden;
	}

	return (
		<div className="record-stream-controls">
			<Button onClick={toggleFeedVisibility} style={{ margin: "8px" }}>
				Toggle Live Feed
			</Button>
			<Button onClick={startRecording} style={{ margin: "8px" }}>
				Start Recording
			</Button>
			<Button onClick={stopRecording} style={{ margin: "8px" }}>
				Stop Recording
			</Button>
			<Button onClick={pauseRecording} style={{ margin: "8px" }}>
				Pause Recording
			</Button>
			<Button onClick={resumeRecording} style={{ margin: "8px" }}>
				Resume Recording
			</Button>
		</div>
	);
}

export default StreamControls;
