import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import UserProfileContent from '../components/profile/UserProfileContent';

const { Header, Footer, Content } = Layout;

function EditUserDashboard() {
   return (
      <>
         <Layout>
            <Header>Header</Header>
            <Content>
               <UserProfileContent />
            </Content>
            <Footer>Footer</Footer>
         </Layout>
      </>
   )
}

export default EditUserDashboard
