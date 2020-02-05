import React from 'react';
import { Card, Icon, Avatar } from 'antd';

function PromptCard(props) {
  const { prompt } = props;

  return (
    <Card className="prompt-card" bordered={false}>
      {/* <div className='image-container'>
        {(!member.img) ? (<Avatar size={64} icon="user" />): (<img src = {member.img} />)}
      </div> */}
      <p className="small">{prompt.question}</p>
    </Card>
  )
}

export default PromptCard;