import React, { useContext } from 'react';
import { UserContext } from "../utils/UserContext";
import { connect } from "react-redux";
import { Card, Avatar } from 'antd';
import EditMemberCard from './EditMemberCard';

function MemberCard(props) {
	const { userRole } = useContext(UserContext)
	const { data } = props;
	const isSelf = data.user_id === props.userId

	return (
		<Card
			className="member-card"
			bordered={false}
			hoverable
		>
			<div className='image-container'>
				{(!data.avatar) ? (<Avatar size={64} icon="user" />) : (
					<img alt="user avatar" src={`https://video-journal.herokuapp.com/public/avatars/${data.avatar}`} />)}
			</div>
			<p className="small">{data.user_full_name}</p>
			{userRole === 1 ? null : (<EditMemberCard member={data} isSelf={isSelf} />)}
		</Card>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	teamMembers: state.Team.teamMembers,
});

export default connect(mapStateToProps)(MemberCard);