import React, { useState } from "react";
import { Layout, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

function Carousel({ component: Component, ...props }) {
	const [index, setIndex] = useState(0);

	return (
		<Content className="carousel">
			<Button onClick={() => setIndex(index - 1)} disabled={index === 0 ? true : false} className="leftButton">
				<Icon type="left" />
			</Button>
			<div className="carouselItems">
				{props.data.slice(index, index + 5).map(item => (
					<Component key={item.id} data={item}/>
				))}
			</div>
			<Button onClick={() => setIndex(index + 1)} disabled={index === props.data.length - 6 ? true : false} className="rightButton">
				<Icon type="right" />
			</Button>
		</Content>
	)
}

export default Carousel;