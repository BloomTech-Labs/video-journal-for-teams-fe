import React, {useState, useEffect} from "react";

// Components
import { Button } from "antd";

//* Satisfies the requirement for:
//* start / stop / pause / continue stream
//* Toggle live feed visibility

function StreamControls({ mediaRecorder, toggleFeedVisibility, visibleFeed, startCountdown, toggleStreamPlayback, isActive }) {
	const [recording, setRecording] = useState(false);
	const [paused, setPaused] = useState(false);

	function startRecording() {
		if (mediaRecorder && mediaRecorder.state === "inactive") {
			startCountdown()
			setTimeout(() => {
				setRecording(true);
				mediaRecorder.start();
			}, 3000)
		}
	}

	function stopRecording() {
		if ((mediaRecorder && mediaRecorder.state === "recording") || (mediaRecorder && mediaRecorder.state === "paused")) {
			setRecording(false);
			mediaRecorder.stop();
			toggleStreamPlayback();
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

	return (
		<>
			<div className="record-stream-controls">
				{recording && !paused ? <button className="Rec">Recording</button> : null}
				<Button onClick={startRecording} style={{display: recording === true ? "none" : "flex", margin: "8px"}}  icon="video-camera" disabled={isActive && !recording ? true : null}>
					<span>Start Recording</span>
				</Button>
				<Button onClick={pauseRecording} style={{display: recording === true && paused === false ? "flex" : "none", margin: "8px"}}icon="pause-circle">
				 <span>Pause Recording</span>
				</Button>
				<Button onClick={resumeRecording} style={{display: recording === true && paused === true ? "flex" : "none", margin: "8px"}} icon="play-circle">
					<span>Resume Recording</span>
				</Button>
				<Button onClick={stopRecording} style={{display: recording === true ? "flex" : "none", margin: "8px"}} icon="stop">
					<span>End Recording</span>
				</Button>
				<Button onClick={toggleFeedVisibility} style={{ margin: "8px" }} icon={visibleFeed ? "eye-invisible" : "eye"}>
					<span>Toggle Live Feed</span>
				</Button>
			</div>
		</>
	);
}

export default StreamControls;
