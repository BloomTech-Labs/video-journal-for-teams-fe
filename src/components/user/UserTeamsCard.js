import React from "react";
import { connect } from "react-redux";
import { Card, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const TeamCard = (props) => {
	return (
		<Link to={`/teams/${props.data.id}`}>
			<Card className="teamCard" size="small">
				<Icon type="ellipsis" />
				{props.data.avatar ? props.data.avatar : <Avatar size={64} icon="team" />}
				<Meta
					style={{ textAlign: "left" }}
					title={props.data.name}
					description={<p className="small">{props.data.description}</p>}
				/>
			</Card>
		</Link>
	);
};

const mapStateToProps = (state) => {
	return {
		isUpdating: state.isUpdating,
	};
};
export default connect(mapStateToProps, {})(TeamCard);
