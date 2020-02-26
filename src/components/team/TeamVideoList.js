import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
//ANTD
import { Button } from "antd";

//Components
import UserVideosCard from "../user/UserVideosCard";
import Carousel from "../shared/Carousel";


function TeamVideoList(props) {
	let { team_id } = useParams();

	return (
		<Carousel
			component={UserVideosCard}
			data={props.videos}
		>
			<Button
				className="add-video-btn"
				size="large"
				icon="video-camera"
			>
			</Button>
		</Carousel>
	)
}

export default TeamVideoList;
