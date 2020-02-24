import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

const UserVideosCard = (props) => {
	const data = props.data;
	const humanDate = new Date(
		Date.parse(data.created_at))
		.toLocaleString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
			hour: "numeric",
			minute: "2-digit"
		});


	return (
		<Link to={`/videos/${props.data.id}`}>
			<Card className="video-card"
				cover={<img alt ={`${data.title } video thumbnail`} src={data.thumbnail} />}
			>
				<Meta style={{ textAlign: "left" }}
					title={data.title}
					description={
						data.description &&
						<>
							<p className="tiny">{humanDate}</p>
							<p className="small">{data.description}{data.description}</p>
						</>
					}
				/>
			</Card>
		</Link>
	);
};

export default UserVideosCard;
