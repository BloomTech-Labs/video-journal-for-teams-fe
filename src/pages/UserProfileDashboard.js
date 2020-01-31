import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import ProfileContent from '../components/profile/ProfileContent';

const { Header, Footer, Content } = Layout;

function EditUserDashboard() {
   return (
      <>
         <Layout>
            <Header>Header</Header>
            <Content>
               <ProfileContent />
            </Content>
            <Footer>Footer</Footer>
         </Layout>
      </>
   )
}

export default EditUserDashboard
