import React, { useRef, useState, useEffect } from "react";
import AxiosWithAuth from "../components/utils/AxiosWithAuth";
// Redux
import { connect } from "react-redux";

// Actions

// Components
import NavAndHeader from "../components/utils/NavAndHeader";
import { Layout, Card, Button, Icon, Form } from "antd";

// Styles
import "../userdash.css";

// const { Title } = Typography;
// const { Header, Content } = Layout;

//* Requirements
//* Ability to capture webcam and audio into a stream - Done
//* Ability to pause/continue/restart recording session - Done
//* Ability to watch video before uploading - Done
//* Ability to capture a static image to be used as a thumbnail
//* Ability to upload video to server and post to a team
//* Ability to download video if the client wants to keep it on their machine

//TODO Connect and use Redux for actions / state
//TODO Break into components and write tests
//TODO Finish functionality

const constraints = {
	//We want to capture audio,
	audio: true,
	//We want to capture video in this configuration
	video: {
		//Camera for mobile users
		facingMode: "user", //Front facing camera on mobile
		//min/ideal/max capture sizes
		width: { min: 640, ideal: 1280, max: 1920 },
		height: { min: 480, ideal: 720, max: 1080 },
		//Try for these framerates if possible
		frameRate: {
			ideal: 15,
			max: 20,
		},
	},
};

//Chunk data from video source (frame data).
let chunks = [];

//Video blob
let blob;

//Media recorder object
let mediaRecorder = null;

function PostTeamVideo(props) {
	const [isRecording, setIsRecording] = useState(false);

	const recordVideoContainer = useRef(null);
	const recordVideoHandle = useRef(null);

	const playbackContainer = useRef(null);
	const playbackVideoHandle = useRef(null);

	const blobStreamHandle = useRef(null);

	useEffect(() => {
		if (recordVideoHandle) {
			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(function(mediaStream) {
					//Set the video source to be our media stream
					recordVideoHandle.current.srcObject = mediaStream;

					//When the video element is ready, play video source.
					recordVideoHandle.current.onloadedmetadata = (e) => {
						recordVideoHandle.current.play();
					};

					const options = { mimeType: "video/webm;" };
					mediaRecorder = new MediaRecorder(mediaStream, options);

					console.log("MediaRecorder setup");

					//On new data, push to chunks array.
					mediaRecorder.ondataavailable = (e) => {
						console.log("New frames pushed to chunks");
						//If we have new data...
						if (e.data.size > 0) {
							//Append
							chunks.push(e.data);
						}
					};

					mediaRecorder.onstop = (e) => {
						console.log("Blob handle", blobStreamHandle);
						//https://developer.mozilla.org/en-US/docs/Web/API/Blob
						//Generate a blob (Binary Large OBject) - A Blob object represents a file-like object of immutable, raw data;
						blob = new Blob(chunks, { type: "video/webm;", name: "alpacafile"});

						//Clear chunks data.
						chunks = [];

						//This creates a url that points to our video currently residing in browser memory.
						//https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
						const videoURL = window.URL.createObjectURL(blob);

						//Set source to video.
						playbackVideoHandle.current.src = videoURL;

						playbackContainer.current.hidden = false;

						//Set ref to video blob
						blobStreamHandle.current.href = videoURL;

						//Set filename
						blobStreamHandle.current.download = "myVideo.webm";

						//* TEMP
						blobStreamHandle.current.hidden = false;
					};
				})
				.catch(function(err) {
					//NotFoundError - This will show up when no video device is detected.
					//NotAllowedError: The request is denied by the user agent or the platform is insecure in the current context.
					//NotReadableError: Failed to allocate videosource - User allowed permission but disconnected device. Could also be hardware error.
					//OverconstrainedError: Constraints could be not satisfied.
					console.log(err.name + ": " + err.message);
				});
		}
	}, [recordVideoHandle]);

	function startRecording() {
		if (mediaRecorder) {
			mediaRecorder.start();
			console.log(mediaRecorder.state);
		}
	}

	function stopRecording() {
		if (mediaRecorder) {
			mediaRecorder.stop();
			console.log(mediaRecorder.state);
		}
	}

	function pauseRecording() {
		if (mediaRecorder) {
			mediaRecorder.pause();
			console.log(mediaRecorder.state);
		}
	}

	function resumeRecording() {
		if (mediaRecorder) {
			mediaRecorder.resume();
			console.log(mediaRecorder.state);
		}
	}

	function toggleFeedVisibility() {
		if (recordVideoHandle) {
			recordVideoHandle.current.hidden = !recordVideoHandle.current.hidden;
		}
	}

	function togglePlaybackVisibility() {
		playbackVideoHandle.current.hidden = !playbackVideoHandle.current.hidden;
	}

	function downloadVideo(e) {
		e.preventDefault();

		console.log("Download video");
	}

	function uploadVideo(e) {
		e.preventDefault();

		const videoData = new FormData();
		videoData.append("alpacafile", blob, blob.name);

		AxiosWithAuth()
			.post("/videos", videoData, {
				headers: {
					"Content-Type": `multipart/form-data; boundary=${videoData._boundary}`,
				},
				timeout: 60000,
			})
			.catch((err) => {
				console.log("Error", { ...err });
			});
	}

	return (
			<NavAndHeader>
				<Card title="Record and post a new video" style={{ margin: "20px" }}>
					<div className="record-container">
						<a ref={blobStreamHandle} href="#" hidden>
							Download
						</a>
						<div ref={recordVideoContainer} className="record-controls">
							<Button onClick={toggleFeedVisibility} style={{ marginRight: "8px" }}>
								Toggle Live Feed
							</Button>
							<Button onClick={startRecording} style={{ marginRight: "8px" }}>
								Start Recording
							</Button>
							<Button onClick={stopRecording} style={{ marginRight: "8px" }}>
								Stop Recording
							</Button>
							<Button onClick={pauseRecording} style={{ marginRight: "8px" }}>
								Pause Recording
							</Button>
							<Button onClick={resumeRecording}>Resume Recording</Button>
						</div>

						<video ref={recordVideoHandle} width="560"></video>
					</div>
					<div ref={playbackContainer} className="playback-container" hidden>
						<div className="playback-controls">
							<Button onClick={togglePlaybackVisibility}>Toggle Playback</Button>
						</div>
						<video ref={playbackVideoHandle} width="560" controls></video>

						<div className="playback-file-options" style={{ marginTop: "16px" }}>
							{/* <Form onSubmit={downloadVideo}>
								<Form.Item>
									<Button style={{ marginRight: "8px" }} htmlType="submit">
										<Icon type="download" /> Download Video
									</Button>
								</Form.Item>
							</Form> */}

							<Form onSubmit={uploadVideo}>
								<Form.Item>
									<Button htmlType="submit">
										<Icon type="upload" /> Upload Video
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</Card>
			</NavAndHeader>
	);
}
const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(PostTeamVideo);
