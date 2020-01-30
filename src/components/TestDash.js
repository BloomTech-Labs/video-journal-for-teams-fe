import React from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import DashboardNav from './DashboardNav';
import TestUserContent from './TestUserContent';

function TestDash() {

   return (
      <>
         <Layout>
            <DashboardNav />
            <TestUserContent />
         </Layout>
      </>
   )
}

export default TestDash
