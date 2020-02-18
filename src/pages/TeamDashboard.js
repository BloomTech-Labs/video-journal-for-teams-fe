import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

// Redux

import { connect } from "react-redux";
import { fetchTeamById } from "../redux/actions/teamActions";

// Components

import MembersList from '../components/team/MembersList';
import PromptVideoList from '../components/team/PromptVideoList';

import { Card } from 'antd';
import NavAndHeader from "../components/utils/NavAndHeader";

function TeamDashboard(props) {
  let { team_id } = useParams();

  useEffect(() => {
		props.fetchTeamById(team_id)
	}, []);

  return (
    <NavAndHeader>
      <h1 style={{marginLeft: "20px"}}>{props.team.name}</h1>
        <Card title="" style={{ margin: "20px" }}>
          <MembersList />
        </Card>
        {/* Diplay Prompts */}
        <Card title="" style={{ margin: "20px" }}>
          <PromptVideoList />
        </Card>
    </NavAndHeader>
  )
}

const mapStateToProps = (state) => ({
	team: state.Team.team
});

const mapActionsToProps = {
	fetchTeamById
};

export default connect(mapStateToProps, mapActionsToProps)(TeamDashboard);
