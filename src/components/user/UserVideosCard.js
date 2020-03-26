import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";
import { humanDate } from "../utils/HumanDate";
import { connect } from "react-redux";
import { fetchFeedback } from "../../redux/actions/userActions";

import { BellFilled } from "@ant-design/icons"
const { Meta } = Card;

const UserVideosCard = (props) => {
	
	const data = props.data;
	// const feedback = props.feedback;
	// const fetchFeedback = props.fetchFeedback;

	// useEffect(() => {
		
	// 	if (!isCancelled) {
	// 		console.log(`useEffect running at ${data.id}`, Date.now())
	// 		fetchFeedback(data.id);
	// 		return () => {
	// 			setIsCancelled(true)
	// 		};
	// 	}
		
		
			
	// },[])
	// //isCancelled, data.id

	console.log("Feedback", data.feedback)
	
	return (
		<Link to={`/videos/${data.id}`}>
			<Card className="video-card"
				cover={<img alt ={`${data.title } video thumbnail`} src={data.thumbnail} style={{display: !data.thumbnail ? "none" : "block"}}/>}
			>
				
				<Meta style={{ textAlign: "left" }}
					title={data.title}
					description={
						data.description &&
						<>
							<p className="tiny">{humanDate(data.created_at)}</p>
							<p className="small">{data.description}</p>
						</>
					}
				/>
				{ (data.feedback !== 'undefined' && data.feedback.length > 0) ? "Feedback": null}
			
			</Card>
		</Link>
	);
};

export default UserVideosCard;
