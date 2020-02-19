import React, {useState} from 'react';
import Dropzone from './Dropzone';
import Progress from './Progress';
import { Icon, Modal } from 'antd';

const Upload = (props) => {
	const [uploading, setUploading] = useState(false)
	const [successfullUploaded, setSuccessfullUploaded] = useState(false)
	const [uploadProgress, setUploadProgress] = useState({})
	const [photo, setPhoto] = useState({})
	const [showModal, setShowModal] = useState(false)

	const onPhotoAdded = (photo) => {
		setPhoto(photo[0]);
		setShowModal(true)
	}

	const renderProgress = (photo) => {
		if (uploading || successfullUploaded) {
			return (
				<div className="ProgressWrapper">
					<Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
					<Icon type="check-circle"
					className="CheckIcon"
					alt="done"
					src="baseline-check_circle_outline-24px.svg"
					style={{
						opacity:
							uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
					}}/>

				</div>
			);
		}
	}

	const toggleModal = () => {
		setShowModal(!showModal)
		setPhoto({})
	}

	const uploadPhoto = async () => {
		setUploadProgress({})
		setUploading(true)
		const promises = [];
		promises.push(sendRequest(photo));
		try {
			await Promise.all(promises);
			
			setSuccessfullUploaded(true)
			setUploading(false)
		} catch (e) {
			setSuccessfullUploaded(true)
			setUploading(false)
		}
	}

	const sendRequest = (photo) => {
		return new Promise((resolve, reject) => {
		 const req = new XMLHttpRequest();
	 
		 req.upload.addEventListener("progress", event => {
			if (event.lengthComputable) {
			 setUploadProgress({
				state: "pending",
				percentage: (event.loaded / event.total) * 100
			 })
			}
		 });
			
		 req.upload.addEventListener("load", event => {
			setUploadProgress({ state: "done", percentage: 100 })
			resolve(req.response);
		 });
			
		 req.upload.addEventListener("error", event => {
			setUploadProgress({ state: "error", percentage: 0 })
			reject(req.response);
		 });
	 
		 const formData = new FormData();
		 formData.append("photo", photo, photo.name);
	 
		 req.open("POST", `http://localhost:5000/api/users/101/photo`);
		 req.setRequestHeader('Authorization', localStorage.getItem("token"))
		 req.send(formData);
		});
	 }

	return (
		<div className="Upload">
		<div className="Content">
			<div>
				<Dropzone
					onPhotoAdded={onPhotoAdded}
					disabled={uploading || successfullUploaded}
				/>
			</div>
			<Modal
				title="Upload Profile Picture"
				visible={showModal}
				onOk={uploadPhoto}
				onCancel={toggleModal}
				okText="Upload"
			>
				<div className="Photo">
			{photo ? <div key={photo.name} className="Row">
				<img src={photo.path}/>
        <span className="Photoname">{photo.name}</span>
				{renderProgress(photo)}
        </div> : null
            }
			</div>
			</Modal>
		</div>
	</div>
	);
}
 
export default Upload;