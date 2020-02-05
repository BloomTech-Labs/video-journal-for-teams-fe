import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getTeamPrompts, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Button } from 'antd';
import './teamTest.css';
import PromptCard from './PromptCard';

const { Header, Content } = Layout;

const PromptsList = (props) => {

  useEffect(() => {
    if (props.teamPrompts.length === 0) {
      props.getTeamPrompts(1);
      console.log("Component", props.teamPrompts)
    }
  }, [props, props.teamPrompts]);

  if (!props.teamPrompts) {
    return <h2>Loading...</h2>;
  } else {

    return (
      <Content>
        <p>Prompts({props.teamPrompts.length})</p>
        <Row gutter={[16, 16]}>
          {/* Add a prompt button */}
          <Col span={2}>
            <Button type="primary" shape="circle" icon="plus-circle" className="add-prompt" />
          </Col>

          {/* Display all team prompts */}
          {props.teamPrompts.map(prompt => (
            <Col span={2}><PromptCard prompt={prompt} /></Col>
          ))}
        </Row>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  teamPrompts: state.Team.teamPrompts
});

const mapActionsToProps = {
  getTeamPrompts,
  setError,
  clearError
};

export default connect(mapStateToProps, mapActionsToProps)(PromptsList);