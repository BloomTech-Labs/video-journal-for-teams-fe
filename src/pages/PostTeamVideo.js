import React from "react";

// Redux
import { connect } from "react-redux";

// Actions

// Components
import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import { Layout, Card, Button } from "antd";

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
	return (
		<Layout>
			<DashboardNav />
			<Content>
				<DashboardHeader />
				<Card title="Record and post a new video" style={{ margin: "20px" }}>
					<p>Yeet</p>
				</Card>
			</Content>
		</Layout>
	);
}
const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(PostTeamVideo);
