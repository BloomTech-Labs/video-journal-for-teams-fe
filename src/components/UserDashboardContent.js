import React from 'react';
import TeamList from './TeamList';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import UserVideos from "./UserVideos"

const { Header, Content } = Layout;

function UserDashboardContent() {

   return (
      <>
      {/* user dash content area */}
         <Layout>
            <Header style={{ background: '#fff', padding: 0, height: 64}}>
               <p>Header</p>
            </Header>
            <Content
               style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
               }}
            >
               <h1>Hi Welcome User</h1>
               <p>Put main content/components for user dashboard content here...</p>
               <TeamList />
               <UserVideos />
            </Content>
         </Layout>
      </>
   )
}

export default UserDashboardContent
