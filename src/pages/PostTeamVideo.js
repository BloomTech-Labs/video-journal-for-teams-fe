import React, { useRef } from "react";

// Redux
import { connect } from "react-redux";

// Actions

// Components
import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import { Layout, Card, Button, Icon, Form } from "antd";

// Styles
import "../userdash.css";
// Additional Ant Design Components
const { Content } = Layout;

// const { Title } = Typography;
// const { Header, Content } = Layout;

//* Requirements
//* Ability to capture webcam and audio into a stream
//* Ability to pause/continue/restart recording session
//* Ability to watch video before uploading
//* Ability to capture a static image to be used as a thumbnail
//* Ability to upload video to server and post to a team

function PostTeamVideo(props) {
	const playbackContainer = useRef(null);
	const blobStreamHandle = useRef(null);

	function downloadVideo(e) {
		e.preventDefault();

		console.log("Download video");
	}

	function uploadVideo(e) {
		e.preventDefault();

		console.log("Upload video");
	}

	return (
		<Layout>
			<DashboardNav />
			<Content>
				<DashboardHeader />
				<Card title="Record and post a new video" style={{ margin: "20px" }}>
					<div className="record-container">
						<a ref={blobStreamHandle} id="blob-stream" href="#" hidden></a>
						<div className="record-controls">
							<Button id="start" style={{ marginRight: "8px" }}>
								Start Recording
							</Button>
							<Button id="stop" style={{ marginRight: "8px" }}>
								Stop Recording
							</Button>
							<Button id="pause" style={{ marginRight: "8px" }}>
								Pause Recording
							</Button>
							<Button id="continue">Continue Recording</Button>
						</div>

						<video id="liveFeed" width="560" height="315"></video>
					</div>
					<div ref={playbackContainer} className="playback-container">
						<video id="recordedStream" width="560" height="315" controls></video>

						<div className="playback-file-options" style={{ marginTop: "16px" }}>
							<Form onSubmit={downloadVideo}>
								<Form.Item>
									<Button style={{ marginRight: "8px" }} htmlType="submit">
										<Icon type="download" /> Download Video
									</Button>
								</Form.Item>
							</Form>

							<Form onSubmit={uploadVideo}>
								<Form.Item>
									<Button htmlType="submit">
										<Icon type="upload" /> Upload Video
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</Card>
			</Content>
		</Layout>
	);
}
const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(PostTeamVideo);
