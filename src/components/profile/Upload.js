import React, {useState} from 'react';
import Dropzone from './Dropzone';
import Progress from './Progress';
import { Icon, Modal, Button, Alert } from 'antd';

import { connect } from "react-redux";
import { updateUProfilePicture, clearPhotoUpload } from "../../redux/actions/userActions";

const Upload = ({ updateUProfilePicture, user_id, imageUpload, clearPhotoUpload}) => {
	const [file, setFile] = useState({})
	const [showModal, setShowModal] = useState(false)

	const onFileAdded = (file) => {
		setFile(file[0]);
		setShowModal(true)
	}

	const renderProgress = (file) => {
		if (imageUpload.isUploading || imageUpload.progress === 100) {
			return (
				<div className="ProgressWrapper">
					<Progress progress={imageUpload.progress ? imageUpload.progress : 0} />
					<Icon type="check-circle"
					className="CheckIcon"
					alt="done"
					src="baseline-check_circle_outline-24px.svg"
					style={{
						opacity:
						imageUpload.progress && imageUpload.progress === 100 ? 0.5 : 0
					}}/>

				</div>
			);
		}
	}

	const handleOk = () => {
		if (imageUpload.progress === 100){
			toggleModal()
		} else {
			sendRequest(file)
		}
	}

	const toggleModal = () => {
		setShowModal(!showModal)
		setFile({})
		clearPhotoUpload();
	}

	const sendRequest = (file) => {
		 const formData = new FormData();
		 formData.append("photo", file, file.name);

		 updateUProfilePicture(user_id, formData);
	 }

	return (
		<div className="Upload">
			<div className="Content">
					<Dropzone
						onFileAdded={onFileAdded}
						// disabled={imageUpload.isUploading || imageUpload.progress === 100}
					/>
				</div>
				<Modal
					className="upload-modal"
					title="Upload Profile Picture"
					visible={showModal}
					onOk={handleOk}
					onCancel={toggleModal}
					// okText={imageUpload.progress === 100 ? "Done" : "Upload"}
					footer={[
            <Button key="submit" type="primary" loading={imageUpload.isUploading} onClick={handleOk}>
              {imageUpload.progress === 100 ? "Done" : "Upload"}
            </Button>,
          ]}
				>{imageUpload.error ? <Alert message={imageUpload.error} type="error" /> : null}
					<div className="Files">
				{file ? <div key={file.name} className="Row">
					<img src={file.path}/>
					<span className="Filename">{file.name}</span>
					{renderProgress(file)}
					</div> : null
							}
				</div>
				</Modal>
		</div>
	);
}

const mapStateToProps = (state) => ({
	user_id: state.User.userId,
	imageUpload: state.User.imageUpload
});

const mapActionsToProps = {
	updateUProfilePicture,
	clearPhotoUpload
};
 
export default connect(mapStateToProps, mapActionsToProps)(Upload);