import React, {useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { BellOutlined } from '@ant-design/icons';

import { Menu, Dropdown } from 'antd';


import { logoutUser, fetchUserVideos, updateViewedFeedback } from "../../redux/actions/userActions";



function NotificationNav(props) {

	const [feedbackUpdate, setFeedbackUpdate] = useState(false);
	
	// useEffect(()=>{
    //     if(props.userId === props.videoOwnerId){
    //         fetchUserVideos(props.userId);
    //     }
		
	// 	//updateViewedFeedback(video.id)
	// 	console.log('useEffect dashboard header', )
	// },[feedbackUpdate])

	// function handleClick(){
		
	// 	setFeedbackUpdate(!feedbackUpdate)
	// }

	
	
	let feedback = props.videos.map(item => {
		return item.feedback
	})

	

	let userFeedback = gatherFeedback(feedback);
	console.log('userFeedback: ', feedback)
	
	function gatherFeedback(arr){
		
		let newArray = []
		for(let i=0; i < arr.length; i++) {
			if(arr[i].length > 0){ 
			for (let k=0; k < arr[i].length; k++) {
				if(arr[i][k].viewed === false){
				newArray.push(arr[i][k])
			}
		}
		}
	}
	return newArray;
	}

 

 

	const menu =  (
				<Menu>
					{userFeedback.map(item => (
					
						<Menu.Item>
							<Link to={`/videos/${item.video_id}`}>
								{item.first_name} {item.last_name} left a feedback on video {item.video_title}
							</Link>
						</Menu.Item>
					
					))}
				</Menu>
	)

	// if (props.userId === props.videoOwnerId){
        return (
		
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" style={{color:"grey"}} onClick={e => e.preventDefault()}>
            <BellOutlined style={{ fontSize: '30px' }} /> 
                </a>
        </Dropdown>


    )
// } else {
//         return (
		
           
//                 <BellOutlined style={{ fontSize: '40px' }} /> 
                    
            
    
    
//         )
//     }
}

const mapStateToProps = (state) => {
	return {
		videos: state.User.videos,
        userId: state.User.userId,
        videoOwnerId: state.User.videoDetailFocus.owner_id
	};
};

const mapActionsToProps = {
	
	fetchUserVideos,
	updateViewedFeedback,
};

export default connect(mapStateToProps, mapActionsToProps)(NotificationNav);
