import React from 'react';
import { Layout, Card } from 'antd';
import MembersList from './MembersList';
import PromptVideoList from './PromptVideoList';
import DashboardHeader from '../DashboardHeader';
import { connect } from "react-redux";

function TeamDashboardContent(props) {
  return (
    <Layout>
      <DashboardHeader></DashboardHeader>
      {/* Display Members */}
      <div>
        <h1>{props.team.name}</h1>
        <Card title="" style={{ margin: "20px" }}>
          <MembersList />
        </Card>

        {/* Diplay Prompts */}
        <Card title="" style={{ margin: "20px" }}>
          <PromptVideoList />
        </Card>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
	team: state.Team.team
});

export default connect(mapStateToProps, {})(TeamDashboardContent);
