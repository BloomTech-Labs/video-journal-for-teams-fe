import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { BellOutlined } from '@ant-design/icons';
import { Layout, Avatar, Popover } from "antd";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { logoutUser } from "../../redux/actions/userActions";

const { Header } = Layout;

function DashboardHeader(props) {
	let history = useHistory();

	const handleLogout = (e) => {
		e.preventDefault();
		props.logoutUser();
		history.push("/");
	};

	const getInitials = () => {
		return props.fullName.split(" ").map((n)=>n[0]).join("").toUpperCase();
	}

	const content = (
		<div>
		<button onClick={handleLogout}>Logout</button>
		</div>
	);	
		

		
	
	let feedback = props.videos.map(item => {
		return item.feedback
	})

	

	let userFeedback = gatherFeedback(feedback);
	console.log('userFeedback ', userFeedback)
	
	function gatherFeedback(arr){
		
		let newArray = []
		for(let i=0; i < arr.length; i++) {
			if(arr[i].length > 0){
			for (let k=0; k < arr[i].length; k++) {
				newArray.push(arr[i][k])
				console.log('hhhhhh',arr[i][k])
			}
		}
	}
	return newArray;
	}

 

 

	const menu = (
				<Menu>
					{userFeedback.map(item => (
		  			<Menu.Item>
						<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
			  			{item.first_name} {item.last_name} left a feedback on video {item.video_title}
					</a>
		  			</Menu.Item>
					))}
				</Menu>
	)

	return (
		<Header className="userDashHeader">
			<div className="userDashContentHeader">

				<Dropdown overlay={menu}>
    				<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
					<BellOutlined style={{ fontSize: '40px' }} /> <DownOutlined />
   					 </a>
  				</Dropdown>,

				<Popover content={content} trigger="click">
					<Avatar size="large" icon="user" src={`${process.env.REACT_APP_S3_STORAGE_PATH}${props.avatar}`} />
					{<p>{getInitials()}</p>}
				</Popover>
			</div>
		</Header>
	);
}

const mapStateToProps = (state) => {
	return {
		fullName: `${state.User.first_name} ${state.User.last_name}`,
		username: state.User.username,
		avatar: state.User.avatar,
		videos: state.User.videos
	};
};

const mapActionsToProps = {
	logoutUser,
	
};

export default connect(mapStateToProps, mapActionsToProps)(DashboardHeader);
