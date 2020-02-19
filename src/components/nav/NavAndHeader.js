import React from 'react';
import { Layout } from 'antd';
import DashboardHeader from './DashboardHeader';
import DashboardNav from './DashboardNav';
const { Content } = Layout;

const NavAndHeader = (props) => {
    return (
				<Layout className="nav-header">
					<DashboardNav />
					<Content>
						<DashboardHeader />
						{props.children}
					</Content>
				</Layout>
			)
  };
  
	export default NavAndHeader;


