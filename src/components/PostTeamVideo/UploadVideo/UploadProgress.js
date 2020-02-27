import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";

// Components
import { notification, Icon } from "antd";

function UploadProgress({ isUploading, uploadProgress }) {
	console.log(isUploading, uploadProgress)
	function openUploadStartNotification() {
		notification.open({
			message: "Upload Started!",
			description:
				"You can continue using the app like normal while the upload happens in the background. However, do not refresh or close the app until it completes!",
			icon: <Icon type="loading" style={{ fontSize: 24 }} spin />,
			duration: 8,
			key: "upload-start"
		});
	}

	function openUploadFinishNotification() {
		notification["success"]({
			message: "Upload Complete!",
			description: "Video upload has finished successfully.",
		});
	}

	function closeUploadStartNotification() {
		notification.close("upload-start");

	}

	useEffect(() => {
		if (isUploading && uploadProgress === 0) {
			openUploadStartNotification();
		}
		if (uploadProgress === 100) {
			openUploadFinishNotification();
			closeUploadStartNotification();
		}
	}, [uploadProgress, isUploading]);

	return <></>;
}

const mapStateToProps = (state) => ({
	isUploading: state.User.videoUpload.isUploading,
	uploadProgress: state.User.videoUpload.progress,
});

export default connect(mapStateToProps, null)(UploadProgress);