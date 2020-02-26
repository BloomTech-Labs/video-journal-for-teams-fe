import React, { useState } from "react";

//Redux
import { connect } from "react-redux";
import { restartRecording } from "../../redux/actions/userActions";

//ANTD
import { Button } from "antd";

//Components
import UserVideosCard from "../user/UserVideosCard";
import Carousel from "../shared/Carousel";
import PostVideoModal from "../PostTeamVideo/PostVideoModal";

function TeamVideoList({promptId, restartRecording, videos}) {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<Carousel
			component={UserVideosCard}
			data={videos}
		>
			<Button
				className="add-video-btn"
				size="large"
				icon="video-camera"
				onClick={() => {
					setShowModal(true);
					restartRecording();
				}}
			>
			</Button>
			<PostVideoModal showModal={showModal} toggleModal={toggleModal} promptId={promptId}/>
		</Carousel>
	)
}

export default connect(null, {restartRecording})(TeamVideoList);
