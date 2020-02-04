import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './teamTest.css';
import MemberCard from './MemberCard';

// Test avatar images
import image1 from './testImg/superhero(1).png'
import image2 from './testImg/superhero(2).png'
import image3 from './testImg/superhero(3).png'
import image4 from './testImg/superhero.png'

const { Header, Content } = Layout;

function MembersList() {

  const mockmembers = [
    {
      "name": "Marcus",
      "img": image1
    },
    {
      "name": "Darrin",
      "img": image2
    },
    {
      "name": "jess",
      "img": image3
    },
    {
      "name": "abby",
      "img": ''
    }
  ]
  return (
    <Content>
      <p>Members({mockmembers.length})</p>
        <Row gutter={[16, 16]}>
        <Col span={3}>Add Member Card</Col>
          {mockmembers.map(member => (
            <Col span={3}><MemberCard member={member} /></Col>
          ))}
        </Row>
    </Content>
  )
}

export default MembersList;
