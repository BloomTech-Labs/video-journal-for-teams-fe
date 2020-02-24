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

	console.log(videos)

	return (
		<Carousel
			component={UserVideosCard}
			data={videos}
		>
			<Button
				type="primary"
				shape="round"
				size="large"
				icon="plus"
				// href={`/teams/${props.teamId}/videos/post/${prompt.id}`}
			>
				Record
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
