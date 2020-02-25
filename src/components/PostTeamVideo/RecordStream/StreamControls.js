import React, {useState, useEffect} from "react";

// Components
import { Button } from "antd";

//* Satisfies the requirement for:
//* start / stop / pause / continue stream
//* Toggle live feed visibility

function StreamControls({ mediaRecorder, toggleFeedVisibility, visibleFeed }) {
	const [recording, setRecording] = useState(false);
	const [paused, setPaused] = useState(false);
	const [countdown, setCountdown] = useState(3);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				if (countdown > 0) {
					setCountdown(countdown => countdown - 1);
				} else  {
					setCountdown(0);
				}
			}, 1000);
		} else {
			clearInterval(interval);
			setIsActive(false);
		}
		return () => clearInterval(interval);
	}, [isActive, countdown]);

	function startRecording() {
		if (mediaRecorder && mediaRecorder.state === "inactive") {
			setIsActive(true);
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
			{isActive && !recording ? <div className="video-countdown">{countdown}</div> : null}
			<div className="record-stream-controls">
				{recording && !paused ? <button className="Rec">Recording</button> : null}
				<Button onClick={startRecording} style={{display: recording === true ? "none" : "flex", margin: "8px"}}  icon="video-camera">
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
