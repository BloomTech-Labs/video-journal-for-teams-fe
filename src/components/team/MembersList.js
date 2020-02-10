import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamMembers, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Button } from 'antd';
import './teamTest.css';
import MemberCard from './MemberCard';

const { Header, Content } = Layout;

function MembersList(props) {
  let { team_id } = useParams();
  const { fetchTeamMembers } = props

  useEffect(() => {
      fetchTeamMembers(team_id)
  }, [team_id, fetchTeamMembers]);

  if (!props.teamMembers) {
    return <h2>Loading...</h2>;
  } else {

    return (
      <Content>
        <p>Members({props.teamMembers.length})</p>
        <Row gutter={[16, 16]}>
          {/* Add member button */}
          <Col span={2}>
            <Button type="primary" shape="circle" icon="plus-circle" className="add-member" />
          </Col>

          {/* Display members */}
          {props.teamMembers.map(member => (
            <Col span={2} key={member.user_id}><MemberCard  member={member} /></Col>
          ))}
        </Row>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  team: state.Team.team,
	teamMembers: state.Team.teamMembers,
	deleteUserCount: state.Team.deleteUserCount
});

const mapActionsToProps = {
  fetchTeamMembers,
  setError,
  clearError
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);