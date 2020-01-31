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
               <Row gutter={96}>
                  <Col span={6}><ProfileAvatar /></Col>
                  <Col span={18}><ProfileForm /></Col>
               </Row>
            </div>
         </div>
      </>
   )
}

export default UserProfileContent
