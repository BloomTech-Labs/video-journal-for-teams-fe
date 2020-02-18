import React from 'react';
import { Card, Typography } from 'antd';
import NavAndHeader from "../components/utils/NavAndHeader";
import UserVideosList from '../components/UserVideosList';

const { Title } = Typography;

function UserVideos() {

  return (
    <NavAndHeader>
      <Title style={{marginLeft: "20px"}}>My Videos</Title>
      {/* Display Videos */}
      <Card title="" style={{ margin: "20px" }}>
        <UserVideosList />
      </Card>
    </NavAndHeader>
  )
}

export default UserVideos;
