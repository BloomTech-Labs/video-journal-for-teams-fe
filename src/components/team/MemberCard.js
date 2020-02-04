import React from 'react';
import { Card, Icon, Avatar } from 'antd';

function MemberCard(props) {
  const { member } = props;

  return (
    <Card className="member-card">
      <div className='image-container'>
        {(!member.img) ? (<Avatar size={80} icon="user" />): (<img src = {member.img} />)}
      </div>
      <p className="small">{member.name}</p>
    </Card>
  )
}

export default MemberCard;
