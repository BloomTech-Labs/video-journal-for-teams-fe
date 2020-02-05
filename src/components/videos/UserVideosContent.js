import React from 'react';
import { Layout, Card, Typography } from 'antd';
import DashboardHeader from '../DashboardHeader';
import UserVideosList from '../UserVideosList';

const { Title } = Typography;

function UserVideosContent() {

  return (
    <Layout>
      <DashboardHeader />
      <Title style={{marginLeft: "20px"}}>My Videos</Title>
      {/* Display Videos */}
      <Card title="" style={{ margin: "20px" }}>
        <UserVideosList />
      </Card>
    </Layout>
  )
}

export default UserVideosContent;
