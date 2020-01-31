import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './tempStyles.css';

// Components
import ProfileCarousel from './ProfileCarousel';
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm';

function UserProfileContent() {

   return (
      <>
         <ProfileCarousel />
         <div className="profile-main">
            <div className="container">
               <Row>
                  <Col span={5}><ProfileAvatar /></Col>
                  <Col span={19}><ProfileForm /></Col>
               </Row>
            </div>
         </div>
      </>
   )
}

export default UserProfileContent
