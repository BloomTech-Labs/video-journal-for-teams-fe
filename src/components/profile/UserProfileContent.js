import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './tempStyles.css';

// Components
import ProfileCarousel from './ProfileCarousel';
import ProfileAvatar from './ProfileAvatar';

function UserProfileContent() {

   return (
      <>
         <ProfileCarousel />
         <div className="container">
            <Row>
               <Col span={5}><ProfileAvatar /></Col>
               <Col span={19}>
                  <p>From content here...</p>
               </Col>
            </Row>
         </div>
      </>
   )
}

export default UserProfileContent
