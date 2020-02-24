import React from 'react';
import Alpaca from '../imgs/alpaca-logo.png';
import AlpacaNoText from '../imgs/alpaca-logo-no-text.png';
import { Row, Col } from "antd";

const AuthSider = (props) => {
	return (
		<Row className="auth-page">
      <Col xs={2} sm={4} md={6} lg={6} xl={8} className="auth-sider">
				<img alt="Alpaca Vids Logo" className="alpaca-logo" src={Alpaca}></img>
				<img alt="Alpaca Vids Logo" className="alpaca-logo-no-text" src={AlpacaNoText}></img>
				<p>Alpaca Vids</p>
      </Col>
      <Col xl={16} className="auth-main">
				{props.children}
			</Col>
    </Row>
	);
}
 
export default AuthSider;