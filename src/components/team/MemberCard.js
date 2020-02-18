import React from 'react';
import { connect } from "react-redux";
import { Card, Avatar } from 'antd';
import EditMemberCard from './EditMemberCard';

function MemberCard(props) {
	const { member } = props;

	return (
		<Card
			className="member-card"
			bordered={false}
			hoverable
		>
			<div className='image-container'>
				{(!member.avatar) ? (<Avatar size={64} icon="user" />) : (
					<img src={`https://video-journal.herokuapp.com/public/avatars/${member.avatar}`} />)}
			</div>

			<p className="small">{member.user_full_name}</p>

			{props.userRole === 1 ? null :

				(<EditMemberCard member={member} />)}
		</Card>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	teamMembers: state.Team.teamMembers,
});

export default connect(mapStateToProps)(MemberCard);