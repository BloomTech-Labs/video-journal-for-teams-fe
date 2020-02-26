import React, { useState, useRef } from 'react';

import { connect } from "react-redux";
import { uploadVideo, toggleStreamPlayback } from "../../redux/actions/userActions";

import RecordStream from "./RecordStream/RecordStream";
import PlaybackStream from "./PlaybackStream/PlaybackStream";
import UploadVideo from "./UploadVideo/UploadVideo";

import { Modal } from 'antd';

export const PostVideoModal = ({toggleStreamPlayback, showModal, toggleModal, videoStream, user_id, promptId, uploadVideo}) => {
	const [videoData, setvideoData] = useState({
				title: "",
				description: "",
				owner_id: user_id,
				prompt_id: promptId,
			});

	const formRef = useRef(null);

	function handleFormInput(e) {
		setvideoData({ ...videoData, [e.target.name]: e.target.value });
	}

	const PostVideoMode = () => {
		if (videoStream && videoStream.playback) {
			return "playback"
		} else if (videoStream && !videoStream.playback && videoStream.raw && videoStream.raw[0] instanceof Blob === true) {
				return "upload"
			} else {
				return "recording"	
		}
	}

	const handleOk = (e) => {
		if (PostVideoMode() === "playback") {
			toggleStreamPlayback();
		} else if (PostVideoMode() === "upload") {
			formRef.current.getForm().validateFields((err, values) => {
				if (!err) {
					//No errors, begin upload
					uploadVideo({...videoData, raw: videoStream.raw});
					toggleModal();
				}
			});
		}
	}

	return (
		<Modal
			centered
			title="Post New Video"
			visible={showModal}
			onOk={handleOk}
			onCancel={toggleModal}
			okButtonProps={{ form: "upload", htmlType: "submit", disabled: PostVideoMode() === "recording" ? true : false} }
			okText={PostVideoMode() !== "upload" ? "Continue" : "Upload"}
		>
			{PostVideoMode() === "recording" ? <RecordStream showModal={showModal}/> : null}
			{PostVideoMode() === "playback" ? <PlaybackStream /> : null}
			{PostVideoMode() === "upload" ? <UploadVideo ref={formRef} handleFormInput={handleFormInput}/> : null}
		</Modal>
	);
}

const mapStateToProps = (state) => ({
	videoStream: state.User.videoStream,
	user_id: state.User.userId,
});

const mapActionsToProps = {
	uploadVideo,
	toggleStreamPlayback,
};

export default connect(mapStateToProps, mapActionsToProps)(PostVideoModal);