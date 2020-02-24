import React, { useEffect } from "react";

//Redux
import { connect } from "react-redux";
import { fetchUserVideos } from "../../redux/actions/userActions";

//ANTD
import { Button } from "antd";

//Components
import UserVideosCard from "./UserVideosCard";
import Carousel from "../shared/Carousel";


function UserVideos({fetchUserVideos, id, videos}) {
	useEffect(() => {
		fetchUserVideos(id)
		console.log("test")
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
				// href={`/teams/${props.teamId}/videos/post/${prompt.id}`}
			>
			</Button>
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
