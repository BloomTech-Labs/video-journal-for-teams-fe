import React from "react";
import { connect } from "react-redux";
import { Card, Icon } from 'antd';


const TeamCard = props => {

	return (
		<Card className="teamCard" size="small"
			actions={[
				"",
				<Icon type="setting" key="setting" title="Manage this team"/>,
			]}
		>
			<p>{props.data.name}</p>
			<p className="small">{props.data.description}</p>
		</Card>
	);
};

const mapStateToProps = state => {
	return {
		isUpdating: state.isUpdating
	};
};
export default connect(mapStateToProps, {})(TeamCard);