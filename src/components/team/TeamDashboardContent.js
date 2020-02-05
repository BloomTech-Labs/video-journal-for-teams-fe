import React from 'react';
import { Layout, Card } from 'antd';
import MembersList from './MembersList';
import DashboardHeader from '../DashboardHeader';

function TeamDashboardContent() {
  return (
    <Layout>
      <DashboardHeader />
      {/* Display Members */}
      <Card title="" style={{ margin: "20px" }}>
        <MembersList />
      </Card>

      {/* Diplay Prompts */}
      <Card title="" style={{ margin: "20px" }}>
        Prompts....
      </Card>
    </Layout>
  )
}

export default TeamDashboardContent;
