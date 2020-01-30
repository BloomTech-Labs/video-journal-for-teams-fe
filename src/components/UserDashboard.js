import React from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import DashboardNav from './DashboardNav';
import UserDashboardContent from './UserDashboardContent';

function UserDashboard() {

   return (
      <>
         <Layout>
            <DashboardNav />
            <UserDashboardContent />
         </Layout>
      </>
   )
}

export default UserDashboard
