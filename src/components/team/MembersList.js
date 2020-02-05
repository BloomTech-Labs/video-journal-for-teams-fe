import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getTeamMembers, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Button } from 'antd';
import './teamTest.css';
import MemberCard from './MemberCard';

// Test avatar images
import image1 from './testImg/superhero(1).png'
import image2 from './testImg/superhero(2).png'
import image3 from './testImg/superhero(3).png'
import image4 from './testImg/superhero.png'

const { Header, Content } = Layout;

function MembersList(props) {

  // const mockmembers = [
  //   {
  //     "name": "Marcus",
  //     "img": image1
  //   },
  //   {
  //     "name": "Darrin",
  //     "img": image2
  //   },
  //   {
  //     "name": "jess",
  //     "img": image3
  //   },
  //   {
  //     "name": "abby",
  //     "img": ''
  //   }
  // ]

  useEffect(() => {
    if (props.teamMembers.length === 0) {
      props.getTeamMembers(1);
      console.log("Component", props.teamMembers)
    }
  }, [props, props.teamMembers]);

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
            <Col span={2}><MemberCard member={member} /></Col>
          ))}
        </Row>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  teamMembers: state.Team.teamMembers
});

const mapActionsToProps = {
  getTeamMembers,
  setError,
  clearError
};

export default connect(mapStateToProps, mapActionsToProps)(MembersList);