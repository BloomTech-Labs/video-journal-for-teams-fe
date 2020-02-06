import React from 'react';
import { connect } from "react-redux";
import { Layout, Tooltip, Avatar, Typography, Card } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;

function DashboardHeader(props) {
  return (
    <Header className="DashHeader">
      <div className="DashContentHeader">
        <Title level={4}>{props.username}</Title>
        <Tooltip placement="left" title="username here">
          {/* change src below for image */}
          <Avatar size="large" icon="user" src="" />
        </Tooltip>
      </div>
    </Header>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.User.username,
  }
}

export default connect(mapStateToProps, {})(DashboardHeader);