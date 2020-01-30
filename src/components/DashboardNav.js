import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
const { Sider } = Layout;

function DashboardNav() {

   const navHeaderStyles = {
      padding: '10px 5px',
      background: 'rgba(255, 255, 255, 0.2)',
      margin: '16px'
   }

   const navHeaderFontStyles = {
      color: '#fff',
      marginBottom: 0
   }

   return (
      <>
         <Sider>
            <div className="nav-header" style={navHeaderStyles}><h2 style={navHeaderFontStyles}>Alpaca Vids</h2></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
               <Menu.Item key="1">
                  <Icon type="user" />
                  <span>Home</span>
               </Menu.Item>
               <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>Settings</span>
               </Menu.Item>
               <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>Profile</span>
               </Menu.Item>
            </Menu>
         </Sider>
      </>
   )
}

export default DashboardNav
