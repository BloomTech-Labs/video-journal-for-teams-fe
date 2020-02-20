import React from 'react';
import { connect } from "react-redux";
import { Card, Avatar, Icon} from 'antd';
import EditMemberCard from './EditMemberCard';

function MemberCard(props) {
	const { member, userRole } = props;

	return (
		<Card
			className="member-card"
			bordered={false}
			hoverable
			actions={[
				<Icon type="up-circle" key="up-circle" theme="twoTone" twoToneColor="#52c41a" />,
				<Icon type="down-circle" key="down-circle" theme="twoTone" twoToneColor="#eb2f96" />,
				<Icon type="stop" key="stop" theme="twoTone" twoToneColor="#ff0000" />
			]}
		>
			<div className='image-container'>
				{(!member.avatar) ? (<Avatar size={64} icon="user" />) : (
					<img src={`https://video-journal.herokuapp.com/public/avatars/${member.avatar}`} />)}
			</div>

			<p className="small">{member.user_full_name}</p>

			{userRole === 1 ? null : (<EditMemberCard member={member} />)}
		</Card>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
	teamMembers: state.Team.teamMembers,
});

export default connect(mapStateToProps)(MemberCard);