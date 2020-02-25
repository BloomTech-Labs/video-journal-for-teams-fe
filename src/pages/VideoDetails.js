import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Actions
import { fetchVideo } from "../redux/actions/userActions";

// Components
import VideoPlayer from "../components/VideoDetails/VideoPlayer";
import Feedback from "../components/VideoDetails/Feedback";

import NavAndHeader from "../components/nav/NavAndHeader";
import { Card, Button } from "antd";
import LoadingView from "../components/utils/LoadingView";
// Styles
import "./videoDetailsTemp.css";

//* Requirements
//* Card component centered in page
//* Header should show User avatar, Prompt, Team
//* Subheader should show Name, Description
//* Display video
//* If viewer is owner, display table with feedback
//* If not owner, display a feedback submission box

/* Response from fetchVideo
id(pin): 9
owner_id(pin): 1
video_title(pin): 'suspendisse potenti'
video_description(pin): 'nunc vestibulum ante ipsum pr…ae mauris'
video_url(pin): 'https://www.youtube.com/embed…w5dK48MtI'
created_at(pin): '2019-09-27T14:53:14.000Z'
prompt_question(pin): 'Tell me how you think others …ribe you.'
owner_name(pin): 'Curr Ladley'
*/

export const VideoDetails = ({ video, fetchVideo }) => {
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		//If we haven't fetched a video OR we have previously and it doesn't match the one in params, fetch it.
		if (!video.id || video.id !== Number(id)) {
			fetchVideo(id);
		}
	}, [id, fetchVideo, video.id]);

	if (video.id !== Number(id)) {
		return <LoadingView />;
	}

	return (
		<NavAndHeader>
			<Card style={{ margin: "20px" }} className="video-detail-card">
				<VideoPlayer video={video}/>
				<Feedback videoId={video.id} videoOwnerId={video.owner_id} />
				<Button onClick={() => history.goBack()}>Back to dashboard</Button>
			</Card>
		</NavAndHeader>
	);
};

const mapStateToProps = (state) => ({
	video: state.User.videoDetailFocus,
});

const mapActionsToProps = {
	fetchVideo,
};

export default connect(mapStateToProps, mapActionsToProps)(VideoDetails);
