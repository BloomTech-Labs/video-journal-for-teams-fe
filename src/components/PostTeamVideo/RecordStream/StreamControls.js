import React, { useState } from "react";

// Components
import { Button, Icon } from "antd";

import Timer from "../Timer";

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
			{recording && !paused ? <button className="Rec">Recording</button> : null}
			{recording ? 
			<Timer recording={recording} paused={paused}/> : null}
			<div className="record-stream-controls">
				<Button className="start-recording" onClick={startRecording} style={{display: recording === true ? "none" : "flex", margin: "8px"}} disabled={isActive && !recording ? true : null}>
					<Icon type="video-camera" theme="filled" />
					<span>Start Recording</span>
				</Button>
				<Button className="pause-recording" onClick={pauseRecording} style={{display: recording === true && paused === false ? "flex" : "none", margin: "8px"}}>
				<Icon type="pause-circle" theme="filled" />
				 <span>Pause Recording</span>
				</Button>
				<Button className="resume-recording" onClick={resumeRecording} style={{display: recording === true && paused === true ? "flex" : "none", margin: "8px"}}>
					<Icon type="play-circle" theme="filled" />
					<span>Resume Recording</span>
				</Button>
				<Button className="stop-recording" onClick={stopRecording} style={{display: recording === true ? "flex" : "none", margin: "8px"}}>
				<	Icon type="stop" theme="filled" />
					<span>End Recording</span>
				</Button>
				<Button className="live-feed" onClick={toggleFeedVisibility} style={{ margin: "8px" }}>
				{visibleFeed ? <Icon type="eye-invisible" theme="filled" /> : <Icon type="eye" theme="filled" />}
					<span>Toggle Live Feed</span>
				</Button>
			</div>
		</>
	);
}

export default StreamControls;
