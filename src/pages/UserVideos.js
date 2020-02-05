import React from 'react';
import { Layout } from 'antd';
import DashboardNav from '../components/DashboardNav';
import UserVideosContent from '../components/videos/UserVideosContent';

function UserVideos() {
  return (
    <>
      <Layout>
        <DashboardNav />
        <UserVideosContent />
      </Layout>
    </>
  )
}

export default UserVideos;
