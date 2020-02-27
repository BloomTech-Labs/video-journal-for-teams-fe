import React, { useRef, useEffect } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import { toggleStreamPlayback, restartRecording } from "../../../redux/actions/userActions";

// Components
import PlaybackControls from "./PlaybackControls";

//* Ability to watch video before uploading

function PlaybackStream({ stream, toggleStreamPlayback, restartRecording }) {
	const playbackStreamHandle = useRef(null);

	//* This fixes an edge case that happens when the user refreshes the page in playback mode
	//* The blob stream becomes invalid, so it crashes the video player, but leaves the page in playback mode
	//* To fix this we just set an onError handler and toggle stream playback to off (record mode)
	useEffect(() => {
		if (playbackStreamHandle.current) {
			playbackStreamHandle.current.onerror = (e) => {
				toggleStreamPlayback();
			};
		}
	}, [playbackStreamHandle, toggleStreamPlayback]);

		return (
			<div className="playback-stream-container">
				<div>
					<video ref={playbackStreamHandle} src={stream} controls></video>
					<PlaybackControls restartRecording={restartRecording} toggleStreamPlayback={toggleStreamPlayback}/>
				</div>
			</div>
		);
}

const mapStateToProps = (state) => ({
	stream: state.User.videoStream.stream,
});

const mapActionsToProps = {
	toggleStreamPlayback,
	restartRecording
};

export default connect(mapStateToProps, mapActionsToProps)(PlaybackStream);
