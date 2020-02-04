import React from 'react';
import { Layout, Tooltip, Avatar, Typography, Card } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;

function TeamDashboardContent() {
  return (
    <Layout>
      <Header className="userDashHeader">
        <div className="userDashContentHeader">
          <Title level={4}>username</Title>
          <Tooltip placement="left" title="username here">
            {/* change src below for image */}
            <Avatar size="large" icon="user" src="" />
          </Tooltip>
        </div>
      </Header>
      <Card title="" style={{ margin: "20px" }}>
        Your team members here...
      </Card>
      <Card title="" style={{ margin: "20px" }}>
        Team vids...
      </Card>
    </Layout>
  )
}

export default TeamDashboardContent;
