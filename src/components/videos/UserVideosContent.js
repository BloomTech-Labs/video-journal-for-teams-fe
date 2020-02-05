import React from 'react';
import { Layout, Card, Typography } from 'antd';
import DashboardHeader from '../DashboardHeader';

const { Title } = Typography;

function UserVideosContent() {
  return (
    <Layout>
      <DashboardHeader />
      <Title>My Videos</Title>
      {/* Display Videos */}
      <Card title="" style={{ margin: "20px" }}>
        Display videos....
      </Card>
    </Layout>
  )
}

export default UserVideosContent;
