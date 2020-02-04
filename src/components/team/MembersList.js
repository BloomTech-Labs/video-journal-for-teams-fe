import React from 'react';
import { Layout, Typography, Row, Col, Button } from 'antd';
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
          {/* Add member button */}
        <Col span={2}>
          <Button type="primary" shape="circle" icon="plus-circle" className="add-member" />
        </Col>

          {/* Display members */}
          {mockmembers.map(member => (
            <Col span={2}><MemberCard member={member} /></Col>
          ))}
        </Row>
    </Content>
  )
}

export default MembersList;
