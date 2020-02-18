import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// Components
import NavAndHeader from "../components/NavAndHeader";
import ClipLoader from "react-spinners/ClipLoader";
import { Layout } from "antd";
import { Card, Table } from "antd";
import { Form, Input, Button } from "antd";

// Actions
import { fetchVideo, fetchFeedback } from "../redux/actions/userActions";

// Styles
import "./videoDetailsTemp.css";

const { Content, Footer } = Layout;
// const { Title } = Typography;
const { TextArea } = Input;

//TODO Cleanup this entire page
//TODO Need to seperate ALOT into different components

//? Requirements
//* Card component centered in page
//* Header should show User avatar, Prompt, Team
//* Subheader should show Name, Description
//* Display video
//* If viewer is owner, display table with feedback
//* If not owner, display a feedback submission box

/*
id(pin): 9
owner_id(pin): 1
video_title(pin): 'suspendisse potenti'
video_description(pin): 'nunc vestibulum ante ipsum pr…ae mauris'
video_url(pin): 'https://www.youtube.com/embed…w5dK48MtI'
created_at(pin): '2019-09-27T14:53:14.000Z'
prompt_question(pin): 'Tell me how you think others …ribe you.'
owner_name(pin): 'Curr Ladley'
*/

const columns = [
	{
		title: "Name",
		dataIndex: "owner_name",
		key: "owner_id",
		render: (text) => <span>{text}</span>,
	},
	{
		title: "Feedback",
		dataIndex: "post",
		key: "post",
		render: (feedback) => <p>{feedback}</p>,
	},
];

const VideoDetails = (props) => {
	const [showFeedback, setShowFeedback] = useState(false);
	const [feedbackInput, setFeedbackInput] = useState("");
	const video = props.video;
	const feedback = props.feedback;
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		props.fetchVideo(id);
	}, [id]);

	useEffect(() => {
		//Check if video data has been fetched
		if (video.owner_id) {
			//Verify if viewer id matches owner id of video
			if (props.userId === video.owner_id) {
				//Get feedback if that's the case
				props.fetchFeedback(id);
				setShowFeedback(true);
			}
		}
	}, [video.owner_id]);

	const handleInput = (e) => {
		setFeedbackInput(e.target.value);
	};

	const submitFeedback = (e) => {
		e.preventDefault();

		if (feedbackInput) {
			console.log("Need an endpoint to submit feedback");
			setFeedbackInput("");
		}
	};

	return (
			<NavAndHeader>
				<Card style={{ margin: "20px" }} className="video-detail-card">
					<div className="spinner">
						<ClipLoader size={50} color="#36d7b7" loading={props.isFetching} />
					</div>
					{props.isFetching ? null : (
						<>
							<h2>{video.video_title}</h2>
							<h4>
								By {video.owner_name}, posted {Date(video.created_at)}
							</h4>
							<iframe
								width="560"
								height="315"
								src={video.video_url}
								frameBorder={0}
								// allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
							<br />

							{showFeedback ? (
								<>
									<Table columns={columns} dataSource={feedback} />
								</>
							) : (
									<>
										<br />
										<Form layout="vertical" onSubmit={submitFeedback}>
											<Form.Item label="Feedback">
												<TextArea rows={4} value={feedbackInput} onChange={handleInput}></TextArea>
											</Form.Item>
											<Form.Item>
												<Button type="primary" htmlType="submit" className="feedback-form-button">
													Submit Feedback
                      </Button>
											</Form.Item>
										</Form>
									</>
								)}
							<br />
							<Button onClick={() => history.goBack()}>Back to dashboard</Button>
						</>
					)}
				</Card>
			</NavAndHeader>
	);
};

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	video: state.User.videoDetailFocus,
	feedback: state.User.videoDetailFocus.feedback,
	isFetching: state.User.isFetching,
});

const mapActionsToProps = {
	fetchVideo,
	fetchFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(VideoDetails);
