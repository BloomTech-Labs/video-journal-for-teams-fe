import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Layout, Card } from 'antd';
import MembersList from './MembersList';
import PromptVideoList from './PromptVideoList';
import DashboardHeader from '../DashboardHeader';
import { connect } from "react-redux";
import { fetchTeamById } from "../../redux/actions/teamActions";

function TeamDashboardContent(props) {
  let { team_id } = useParams();

  useEffect(() => {
		props.fetchTeamById(team_id)
	}, []);

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

const mapActionsToProps = {
	fetchTeamById
};

export default connect(mapStateToProps, mapActionsToProps)(TeamDashboardContent);
