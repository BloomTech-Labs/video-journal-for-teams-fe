import React, { useState, useEffect, useRef } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import {
	updateStreamObject,
	updateStreamRaw,
	toggleStreamPlayback,
	setStreamError,
} from "../../../redux/actions/userActions";

// Components
import StreamControls from "./StreamControls";

// mediaRecorder config
import MediaRecorderConfig from "./options";

//Raw mediaRecorder data
let chunks = [];

//* Satisfies the requirement for:
//* Capture webcam and audio into a stream
//* Record stream and update stream object URL in redux

function RecordStream({ updateStreamObject, updateStreamRaw, toggleStreamPlayback, setStreamError, playback }) {
	const [mediaRecorder, setMediaRecorder] = useState(null);
	const streamElementHandle = useRef(null);

	useEffect(() => {
		setupMediaStream();
	}, [playback]);

	useEffect(() => {
		if (mediaRecorder) {
			finalizeMediaRecorderSetup();
		}
	}, [mediaRecorder, finalizeMediaRecorderSetup]);

	//* Setup for media stream init, linking to video source and recorder init
	function setupMediaStream() {
		navigator.mediaDevices
			.getUserMedia(MediaRecorderConfig.constraints)
			.then(function(mediaStream) {
				//Pipe stream to video element
				connectStreamToVideo(mediaStream);

				//Create media recorder instance to capture the stream
				setupMediaRecorder(mediaStream);
			})
			.catch(function(error) {
				//NotFoundError - This will show up when no video device is detected.
				//NotAllowedError: The request is denied by the user agent or the platform is insecure in the current context.
				//NotReadableError: Failed to allocate videosource - User allowed permission but disconnected device. Could also be hardware error.
				//OverconstrainedError: Constraints could be not satisfied.
				setStreamError(`${error.name}: ${error.message}`);
			});
	}

	//* Connects mediaStream to video DOM element
	function connectStreamToVideo(mediaStream) {
		//Set the video source to be our media stream
		streamElementHandle.current.srcObject = mediaStream;

		//When the video element is ready, play video source.
		streamElementHandle.current.onloadedmetadata = (e) => {
			streamElementHandle.current.play();
		};
	}

	//* Creates an instance of MediaRecorder using the passed in mediaStream object.
	function setupMediaRecorder(mediaStream) {
		setMediaRecorder(new MediaRecorder(mediaStream, MediaRecorderConfig.options));
	}

	//* Adds event handlers for onStop & onDataAvailable to the MediaRecorder
	function finalizeMediaRecorderSetup() {
		//On new data, push to chunks array.
		mediaRecorder.ondataavailable = (e) => {
			//If we have new data...
			if (e.data.size > 0) {
				//Append
				chunks.push(e.data);
			}
		};

		mediaRecorder.onstop = (e) => {
			//https://developer.mozilla.org/en-US/docs/Web/API/Blob
			//Generate a blob (Binary Large OBject) - A Blob object represents a file-like object of immutable, raw data;
			const blob = new Blob(chunks, { type: "video/webm" });

			//Update ref to blob in redux
			updateStreamRaw(chunks);

			//This creates a url that points to our video in browser memory.
			//https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
			//Update stream obj ref in redux
			updateStreamObject(window.URL.createObjectURL(blob));

			//Clear chunk data.
			chunks = [];

			//Clear errors because we are done with the stream
			setStreamError(false);

			//Enable playback feed and download/upload options
			toggleStreamPlayback();
		};
	}

	//Check if we are in record or playback mode
	if (!playback) {
		return (
			<div className="record-stream-container">
				<StreamControls mediaRecorder={mediaRecorder} streamElementHandle={streamElementHandle} />
				<video ref={streamElementHandle} width="560"></video>
			</div>
		);
	} else {
		return null;
	}
}

const mapStateToProps = (state) => ({
	playback: state.User.videoStream.playback,
});

const mapActionsToProps = {
	updateStreamObject,
	updateStreamRaw,
	toggleStreamPlayback,
	setStreamError,
};

export default connect(mapStateToProps, mapActionsToProps)(RecordStream);
