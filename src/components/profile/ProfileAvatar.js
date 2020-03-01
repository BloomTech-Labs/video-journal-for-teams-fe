import React from 'react';
import Upload from './Upload';
import { connect } from "react-redux";

function ProfileAvatar() {
   return (
      <>
         <div className="avatar-wrapper">
            <Upload />
         </div>
      </>
   )
}

const mapStateToProps = state => {
	return {
		avatar: state.User.avatar,
	}
};

export default connect(mapStateToProps, {})(ProfileAvatar);
