import React from 'react';
import { Layout, Card } from 'antd';
import MembersList from './MembersList';
import DashboardHeader from '../DashboardHeader';

function TeamDashboardContent() {
  return (
    <Layout>
      <DashboardHeader />
      <Card title="" style={{ margin: "20px" }}>
        <MembersList />
      </Card>
      <Card title="" style={{ margin: "20px" }}>
        Team vids...
      </Card>
    </Layout>
  )
}

export default TeamDashboardContent;
