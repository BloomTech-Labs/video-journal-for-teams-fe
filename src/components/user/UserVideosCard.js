import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";
import { CheckCircleOutlined } from "@ant-design/icons";
import { humanDate } from "../utils/HumanDate";
import VideoPlayer from "simple-react-video-thumbnail";

const { Meta } = Card;

const UserVideosCard = (props) => {
	const data = props.data;
	return (
		<Link to={`/videos/${data.id}`}>
			<Card
				className="video-card"
				cover={<VideoPlayer videoUrl={`${process.env.REACT_APP_S3_STORAGE_PATH}${data.video_url}`} snapshotAt={2} />}>
				<Meta
					style={{ textAlign: "left" }}
					title={data.title}
					description={
						data.description && (
							<>
								<p style={{ textAlign: "left", color: "green" }}>
									{data.feedback !== "undefined" && data.feedback.length > 0 ? <CheckCircleOutlined /> : null}
								</p>
								<p className="tiny">{humanDate(data.created_at)}</p>
								<p className="small">{data.description}</p>
							</>
						)
					}
				/>
			</Card>
		</Link>
	);
};

export default UserVideosCard;
