import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { BellOutlined } from "@ant-design/icons";
import { Layout, Avatar, Popover } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useOktaAuth } from "@okta/okta-react";

import { logoutUser, fetchUserVideos, updateViewedFeedback } from "../../redux/actions/userActions";

import NotificationNav from "./NotificationNav";

const { Header } = Layout;

function DashboardHeader(props) {
	const [feedbackUpdate, setFeedbackUpdate] = useState(false);
	let history = useHistory();
	const { authService, authState } = useOktaAuth();

	const handleLogout = (e) => {
		e.preventDefault();
		props.logoutUser();
		authService.logout("/");
		history.push("/");
	};

	const getInitials = () => {
		return props.fullName
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	const content = (
		<div>
			<button onClick={handleLogout} style={{ color: '#FF7F50'}}>Logout</button>
		</div>
	);

	// let feedback = props.videos.map(item => {
	// 	return item.feedback
	// })

	// let userFeedback = gatherFeedback(feedback);

	// function gatherFeedback(arr){

	// 	let newArray = []
	// 	for(let i=0; i < arr.length; i++) {
	// 		if(arr[i].length > 0){
	// 		for (let k=0; k < arr[i].length; k++) {
	// 			if(arr[i][k].viewed === false){
	// 			newArray.push(arr[i][k])
	// 		}
	// 	}
	// 	}
	// }
	// return newArray;
	// }

	// const menu = (
	// 			<Menu>
	// 				{userFeedback.map(item => (

	// 					<Menu.Item onClick={handleClick}>
	// 						<Link to={`/videos/${item.video_id}`}>
	// 							{item.first_name} {item.last_name} left a feedback on video {item.video_title}
	// 						</Link>
	// 					</Menu.Item>

	// 				))}
	// 			</Menu>
	// )

	return (
		<Header className="userDashHeader">
			<div className="userDashContentHeader">
				{/* <Dropdown overlay={menu}>
    				<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
					<BellOutlined style={{ fontSize: '40px' }} /> <DownOutlined />
   					 </a>
  				</Dropdown> */}
				<NotificationNav />

				<div className="bbb">
					<Popover content={content} trigger="click">
						<Avatar
							className="bbb"
							size="large"
							icon="user"
							src={`${process.env.REACT_APP_S3_STORAGE_PATH}${props.avatar}`}
						/>
						{<p>{getInitials()}</p>}
					</Popover>
				</div>
			</div>
		</Header>
	);
}

const mapStateToProps = (state) => {
	return {
		fullName: `${state.User.first_name} ${state.User.last_name}`,
		username: state.User.username,
		avatar: state.User.avatar,
		videos: state.User.videos,
		userId: state.User.userId,
	};
};

const mapActionsToProps = {
	logoutUser,
	fetchUserVideos,
	updateViewedFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(DashboardHeader);
