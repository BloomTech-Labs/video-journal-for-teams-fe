import React, { useState } from "react";

// Redux
import { connect } from "react-redux";

// Actions
import { uploadVideo } from "../../../redux/actions/userActions";

// Components
import UploadModal from "./UploadModal";
import { Button } from "antd";

function UploadVideo({ user_id, uploadVideo, rawVideoData }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Button onClick={() => setShowModal(true)} style={{ marginRight: "8px" }}>
				Upload Video
			</Button>
			<UploadModal
				isVisible={showModal}
				setVisibility={setShowModal}
				uploadVideo={uploadVideo}
				rawVideoData={rawVideoData}
				user_id={user_id}
			/>
		</>
	);
}

const mapStateToProps = (state) => ({
	user_id: state.User.userId,
	rawVideoData: state.User.videoStream.raw,
});

const mapActionsToProps = {
	uploadVideo,
};

export default connect(mapStateToProps, mapActionsToProps)(UploadVideo);
