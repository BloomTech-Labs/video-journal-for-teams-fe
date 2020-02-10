import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { connect } from "react-redux";

import { fetchInvite } from "../redux/actions/userActions";

import LoadingView from "../components/utils/LoadingView";

const Invite = (props) => {
  const {invite} = useParams();


  useEffect(() => {
    props.fetchInvite(invite)
  }, [invite])

  return (
    <div>
      {
      props.isLoading
      ? <LoadingView />
      : <Redirect to='/register' />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.User.isLoading,
  error: state.User.error
});

const mapActionsToProps = {
  fetchInvite
};
 
export default connect(mapStateToProps, mapActionsToProps)(Invite);