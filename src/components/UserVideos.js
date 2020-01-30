import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// temporary array for state data.
const temp = [
	{
		owner: "Alpha Temp Name",
		video_name: "Video alpha name",
	},
	{
		owner: "Beta Name Temporary",
		video_name: "Beta video name",
	},
]


function UserVideos() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		/* 
		Get video data from backend api
		using the user_id from redux state
		 */
		setVideos(temp);
	},[])

	return (
		<>
			<Layout>
				{videos.map(el => (
					<p>{el.owner}, {el.video_name}</p>
				))}
			</Layout>
		</>
	)
}

export default UserVideos
