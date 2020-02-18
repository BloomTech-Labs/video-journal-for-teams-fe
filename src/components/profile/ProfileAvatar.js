import React from 'react';
import Upload from '../utils/Upload';

function ProfileAvatar() {
   return (
      <>
         <div className="avatar-wrapper">
            <Upload />
            {/* <div className="avatar-img">
               <div className="img-wrapper">
                  <img src="https://via.placeholder.com/150" />
               </div>
            </div>
            <div className="av-link"><a href="#">Change Profile Picture</a></div> */}
         </div>
      </>
   )
}

export default ProfileAvatar
