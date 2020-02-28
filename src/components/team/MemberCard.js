import React, { useContext } from 'react';
import { UserContext } from "../utils/UserContext";
import { connect } from "react-redux";
import { Card, Avatar } from 'antd';
import EditMemberCard from './EditMemberCard';

function MemberCard(props) {
	const { userRole } = useContext(UserContext)
	const { data } = props;

	return (
		<Card
			className="member-card"
			bordered={false}
			hoverable
		>
			<div className='image-container'>
				{(!data.avatar) ? (<Avatar size={64} icon="user" />) : (
					<img alt="user avatar" src={`${process.env.REACT_APP_S3_STORAGE_PATH}${data.avatar}`} />)}
			</div>
			{userRole === 1 ? null : (<EditMemberCard member={data} />)}
			<p className="small">{data.user_full_name}</p>
		</Card>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	teamMembers: state.Team.teamMembers,
});

export default connect(mapStateToProps)(MemberCard);