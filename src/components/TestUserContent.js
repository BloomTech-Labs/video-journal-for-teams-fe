import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content } = Layout;

function TestUserContent() {

   return (
      <>
      {/* user dash content area */}
         <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
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
               <p>Main dashboard content here...</p>
            </Content>
         </Layout>
      </>
   )
}

export default TestUserContent
