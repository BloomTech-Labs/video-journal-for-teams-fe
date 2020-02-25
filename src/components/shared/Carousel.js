import React, { useState, useRef, useEffect } from "react";
import { Layout, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;

function Carousel({ component: Component, ...props }) {
	const [axis, setAxis] = useState(0);
	const [width, setWidth] = useState(window.innerWidth)
	const carouselList = useRef(null);
	
	useEffect(() => {
		function handleResize() {
      setWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return function cleanup() {
			window.removeEventListener('resize', handleResize)
		}
	}, [width])

	const scroll = (direction) => {
		let newAxis;
		const scrollAmount = carouselList.current.scrollWidth / carouselList.current.childElementCount;
		const maxScrollWidth = carouselList.current.scrollWidth - carouselList.current.clientWidth;

		if (axis + direction * scrollAmount > maxScrollWidth) {
			newAxis = maxScrollWidth
		} else if (axis + direction * scrollAmount < 0) {
			newAxis = 0
		} else {
			newAxis = axis + direction * scrollAmount
		}

		carouselList.current.scrollTo({
			top: 0,
			left: newAxis,
			behavior: 'smooth'
		});
		setAxis(newAxis)	
	}

	return (
		<Content className="carousel">
			<Button
				onClick={() => { scroll(-1) }}
				disabled={axis === 0 ? true : false}
				className="leftButton"
			>
				<Icon type="left" />
			</Button>
			<div className="carouselItems" ref={carouselList}>
				{props.children}
				{props.data.map(item => (
					<Component key={item.id} data={item}/>
				))}
			</div>
			<Button 
				onClick={() => { scroll(1) }}
				disabled={carouselList.current && axis === carouselList.current.scrollWidth - carouselList.current.clientWidth ? true : false }
				className="rightButton"
			>
				<Icon type="right" />
			</Button>
		</Content>
	)
}

export default Carousel;