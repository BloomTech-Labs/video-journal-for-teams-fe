import React, { useState } from 'react';
import { Card, Icon, Avatar } from 'antd';
import EditMemberCard from './EditMemberCard';

function MemberCard(props) {
	const { member } = props;

	return (
		<Card
			className="member-card"
			bordered={false}
			hoverable
		>
			{/* <div className='image-container'>
        {(!member.img) ? (<Avatar size={64} icon="user" />): (<img src = {member.img} />)}
      </div> */}
			<p className="small">{member.user_full_name}</p>
			<EditMemberCard member={member} />
		</Card>
	)
}

export default MemberCard;
