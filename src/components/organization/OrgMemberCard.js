import React, { useContext } from 'react';
import { UserContext } from "../utils/UserContext";
import { connect } from "react-redux";
import { Card, Avatar } from 'antd';
import OrgEditMemberCard from './OrgEditMemberCard'

function OrgMemberCard(props) {


	
	
	const { data, organization_id } = props;
    const isSelf = data.user_id === props.userId
    

	return (
		<Card
			className="member-card"
			bordered={false}
			hoverable
		>
			<div className='image-container'>
				{(!data.avatar) ? (<Avatar size={64} icon="user" />) : (
					<img alt="user avatar" src={`${process.env.REACT_APP_S3_STORAGE_PATH}${data.avatar}`} />)}
			</div>
			<p className="small">{data.user_full_name}</p>
			 
			<OrgEditMemberCard member={data} isSelf={isSelf} organization_id = {organization_id} />
		</Card>
	)
}

const mapStateToProps = (state) => ({
	userId: state.User.userId,
    organization_users: state.Organization.users,
    //userRole:state.Organization.role_id
});

export default connect(mapStateToProps)(OrgMemberCard);