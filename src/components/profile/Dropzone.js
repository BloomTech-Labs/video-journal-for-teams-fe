import React, { useState } from 'react';
import { Icon, Avatar, Button } from 'antd';

import { connect } from "react-redux";

const Dropzone = (props) => {
	const [hightlight, setHighlight] = useState(false)
	const fileInputRef = React.createRef();

const fileListToArray = (list) => {
	const array = [];

  for (var i = 0; i < list.length; i++) {
    array.push(list.item(i));
	}
	array[0].path = URL.createObjectURL(list[0])
	console.log(array)
  return array
}

	const onFileAdded = (evt) => {
		if (props.disabled) return;
  		const files = evt.target.files;
  	if (props.onFileAdded) {
    	const array = fileListToArray(files);
    	props.onFileAdded(array);
	}
}

	const openFileDialog = () => {
		if (props.disabled) return;
		fileInputRef.current.click();
	}

	const onDragOver = (evt) => {
		evt.preventDefault();

  	if (props.disabled) return;

  	setHighlight(true);
	}

	const onDragLeave = () => {
		setHighlight(false);
	}

	const onDrop = (event) => {
		event.preventDefault();

		if (props.disabled) return;

		const files = event.dataTransfer.files;
		if (props.onFileAdded) {
			const array = fileListToArray(files);
			props.onFileAdded(array);
		}
		setHighlight(false);
	}

	return (
		<div className="dropzone-component">
			<Avatar alt="user avatar" size={216} className="user-avatar" src={`${process.env.REACT_APP_S3_STORAGE_PATH}${props.avatar}`} />
			<Icon type="cloud-upload" className={`Dropzone ${hightlight ? "Highlight" : ""}`}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDrop={onDrop}
				onClick={openFileDialog}
				style={{ cursor: props.disabled ? "default" : "pointer" }}/>
				<input
					ref={fileInputRef}
					className="FileInput"
					type="file"
					multiple
					onChange={onFileAdded}
				/>
			<Button onClick={openFileDialog}>
				<span>Change profile picture</span>
			</Button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	avatar: state.User.avatar
});
 
export default connect(mapStateToProps, {})(Dropzone);
