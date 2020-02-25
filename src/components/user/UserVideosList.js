import React, { useState, useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { fetchUserVideos } from "../../redux/actions/userActions";

//ANTD
import { Button } from "antd";

//Components
import UserVideosCard from "./UserVideosCard";
import Carousel from "../shared/Carousel";
import PostVideoModal from "./PostVideoModal";


function UserVideos({fetchUserVideos, id, videos, promptId}) {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	useEffect(() => {
		fetchUserVideos(id)
	}, [id, fetchUserVideos])

	return (
		<Carousel
			component={UserVideosCard}
			data={videos}
		>
			<Button
				className="add-video-btn"
				size="large"
				icon="video-camera"
				onClick={() => setShowModal(true)}
			>
			</Button>
			<PostVideoModal showModal={showModal} toggleModal={toggleModal} promptId={promptId}/>
		</Carousel>
	)
}

const mapStateToProps = (state) => {
	return {
		videos: state.User.videos,
		id: state.User.userId
	}
}

export default connect(mapStateToProps, { fetchUserVideos })(UserVideos);
