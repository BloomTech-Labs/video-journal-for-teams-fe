import React, { useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";

import { connect } from "react-redux";

import { fetchInvite } from "../redux/actions/userActions";

import LoadingView from "../components/utils/LoadingView";

const Invite = ({ fetchInvite, isLoading }) => {
	const { invite } = useParams();

	const history = useHistory();

	useEffect(() => {
		fetchInvite(invite);
	}, [invite, fetchInvite]);

	return (
		<div>
			{
				isLoading ? <LoadingView /> : history.push("/user-dashboard")
				// : <Redirect to='/register' />
			}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.User.isLoading,
});

const mapActionsToProps = {
	fetchInvite,
};

export default connect(mapStateToProps, mapActionsToProps)(Invite);
