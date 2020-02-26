import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";
import { humanDate } from "../utils/HumanDate";
const { Meta } = Card;

const UserVideosCard = (props) => {
	const data = props.data;
	
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
							<p className="small">{data.description}{data.description}</p>
						</>
					}
				/>
			</Card>
		</Link>
	);
};

export default UserVideosCard;
