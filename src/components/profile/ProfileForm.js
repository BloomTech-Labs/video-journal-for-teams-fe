import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
const { TextArea } = Input;

function ProfileForm() {
   return (
      <div className="profile-information">
         <h1>Update Profile Information</h1>
         <div className="form-container">
            <Form layout="vertical">
               <Row gutter={24}>
                  <Col span={12}>
                     <Form.Item label="First Name">
                        <Input placeholder="First Name" />
                     </Form.Item>
                     <Form.Item label="Last Name">
                        <Input placeholder="Last Name" />
                     </Form.Item>
                     <Form.Item label="Email">
                        <Input placeholder="Email" />
                     </Form.Item>
                     <Form.Item label="Website">
                        <Input placeholder="Website" />
                     </Form.Item>
                     <Form.Item label="Bio">
                        <TextArea placeholder="Bio" />
                     </Form.Item>
                  </Col>

                  <Col span={12}>
                     <Form.Item label="Current Password">
                        <Input placeholder="Current Password" />
                     </Form.Item>
                     <Form.Item label="New Password">
                        <Input placeholder="New Password" />
                     </Form.Item>
                     <Form.Item label="Confirm Password">
                        <Input placeholder="Confirm Password" />
                     </Form.Item>
                  </Col>
                  <Col span={24} className="button-wrapper">
                     <Button type="primary" htmlType="submit">
                        Save
                     </Button>
                     <Button type="secondary">
                        Cancel
                     </Button>
                  </Col>
               </Row>
            </Form>
         </div>
      </div>
   )
}

export default ProfileForm
