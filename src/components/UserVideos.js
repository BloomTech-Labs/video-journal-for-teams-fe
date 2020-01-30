import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// temporary array for state data.

function UserVideos() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		/* 
		Get video data from backend api
		using the user_id from redux state
		*/
		setVideos(MOCKDATA);
	}, [])

	return (
		<>
			<Layout>
				{videos.map(el => (
					<p>{el.title}, {el.created_at}</p>
				))}
			</Layout>
		</>
	)
}

const MOCKDATA = [
	{ "video_id": 1, "user_id": 1, "title": "Replace pyelostomy tube", "description": "Replacement of pyelostomy tube", "fs_path": "http://dummyimage.com/109x121.jpg/cc0000/ffffff", "created_at": "2020-01-08 12:44:13", "updated_at": null },
	{ "video_id": 2, "user_id": 1, "title": "Total ostectomy-humerus", "description": null, "fs_path": "http://dummyimage.com/183x191.png/dddddd/000000", "created_at": "2020-01-04 01:40:07", "updated_at": null },
	{ "video_id": 3, "user_id": 1, "title": "Highly select vagotomy", "description": null, "fs_path": "http://dummyimage.com/209x160.jpg/dddddd/000000", "created_at": "2020-01-02 04:05:03", "updated_at": null },
	{ "video_id": 4, "user_id": 1, "title": "Temporary colostomy", "description": "Temporary colostomy", "fs_path": "http://dummyimage.com/198x171.png/5fa2dd/ffffff", "created_at": "2020-01-12 18:26:07", "updated_at": null },
	{ "video_id": 5, "user_id": 1, "title": "Remov intralum uter FB", "description": null, "fs_path": "http://dummyimage.com/104x207.jpg/5fa2dd/ffffff", "created_at": "2020-01-08 03:57:37", "updated_at": "2020-01-17 15:48:07" },
	{ "video_id": 6, "user_id": 1, "title": "Excision tunica les NEC", "description": "Excision of lesion of tunica other than hydrocele", "fs_path": "http://dummyimage.com/125x240.bmp/5fa2dd/ffffff", "created_at": "2020-01-10 01:08:19", "updated_at": null },
	{ "video_id": 7, "user_id": 1, "title": "Tricep reconstruction", "description": null, "fs_path": "http://dummyimage.com/163x109.png/ff4444/ffffff", "created_at": "2020-01-04 14:58:59", "updated_at": null },
	{ "video_id": 8, "user_id": 1, "title": "Carotid sinus stiumlat", "description": "Carotid sinus stimulation", "fs_path": "http://dummyimage.com/126x172.png/5fa2dd/ffffff", "created_at": "2020-01-11 13:18:13", "updated_at": null },
	{ "video_id": 9, "user_id": 1, "title": "Vasotomy", "description": "Vasotomy", "fs_path": "http://dummyimage.com/234x228.bmp/5fa2dd/ffffff", "created_at": "2020-01-06 19:03:15", "updated_at": "2020-01-23 12:27:18" },
	{ "video_id": 10, "user_id": 1, "title": "Quadricepsplasty", "description": "Quadricepsplasty", "fs_path": "http://dummyimage.com/234x131.png/ff4444/ffffff", "created_at": "2020-01-03 06:49:25", "updated_at": "2020-01-21 04:33:41" },
]

export default UserVideos
