import React, { useRef } from "react";

// Redux
import { connect } from "react-redux";

// Components
import { Button } from "antd";

export function DownloadVideo({ videoUrl }) {
	const downloadRef = useRef(null);

	function download() {
		downloadRef.current.click();
	}

	return (
		<>
			<a ref={downloadRef} href={videoUrl} download="alpacavid.webm" hidden>
				Download Video
			</a>
			<Button onClick={download} style={{ margin: "8px" }} icon="download">
				<span>Download Video</span>
			</Button>
		</>
	);
}

const mapStateToProps = (state) => ({
	videoUrl: state.User.videoStream.stream,
});

export default connect(mapStateToProps, null)(DownloadVideo);
