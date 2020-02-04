import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import MemberCard from './MemberCard';
const { Header, Content } = Layout;

function MembersList() {

  const mockmembers = [
    {
      "name": "doug"
    },
    {
      "name": "rick"
    },
    {
      "name": "jess"
    },
    {
      "name": "abby"
    }
  ]
  return (
    <Content>
      <p>Members({mockmembers.length})</p>
        <Row gutter={[16, 16]}>
          {mockmembers.map(member => (
            <Col span={3}><MemberCard /></Col>
          ))}
        </Row>
    </Content>
  )
}

export default MembersList;
