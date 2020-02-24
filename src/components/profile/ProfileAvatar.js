import React from 'react'

function ProfileAvatar() {
   return (
      <>
         <div className="avatar-wrapper">
            <div className="avatar-img">
               <div className="img-wrapper">
                  <img alt="user avatar" src="https://via.placeholder.com/150" />
               </div>
            </div>
            <div className="av-link">
               <a href="#">Change Profile Picture</a>
            </div>
         </div>
      </>
   )
}

export default ProfileAvatar
