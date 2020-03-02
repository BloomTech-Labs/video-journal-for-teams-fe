import React from 'react'

const Progress = (props) => {
	return (
	<div className="ProgressBar">
		<div
			className="Progress"
			style={{ width: props.progress + '%' }}
		/>
	</div>);
}
 
export default Progress;
