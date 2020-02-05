import React from 'react';
import { Layout } from 'antd';
import DashboardNav from '../components/DashboardNav';
import TeamDashboardContent from '../components/team/TeamDashboardContent';

function TeamDashboard() {
  return (
    <div>
      <>
        <Layout>
          <DashboardNav />
          <TeamDashboardContent />
        </Layout>
      </>
    </div>
  )
}

export default TeamDashboard
