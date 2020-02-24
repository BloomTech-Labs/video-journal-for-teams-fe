import React, { useRef, useEffect } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import { toggleStreamPlayback } from "../../../redux/actions/userActions";

// Components
import PlaybackControls from "./PlaybackControls";

//* Ability to watch video before uploading

function PlaybackStream({ stream, toggleStreamPlayback, playback }) {
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

	if (playback) {
		return (
			<div className="playback-stream-container">
				<PlaybackControls toggleStreamPlayback={toggleStreamPlayback} />
				<video ref={playbackStreamHandle} src={stream} width="560" controls></video>
			</div>
		);
	} else {
		return null;
	}
}

const mapStateToProps = (state) => ({
	playback: state.User.videoStream.playback,
	stream: state.User.videoStream.stream,
});

const mapActionsToProps = {
	toggleStreamPlayback,
};

export default connect(mapStateToProps, mapActionsToProps)(PlaybackStream);
