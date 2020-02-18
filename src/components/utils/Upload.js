import React, {useState} from 'react';
import Dropzone from './Dropzone';
import Progress from './Progress';
import { Icon, Modal } from 'antd';

const Upload = () => {
	const [uploading, setUploading] = useState(false)
	const [successfullUploaded, setSuccessfullUploaded] = useState(false)
	const [uploadProgress, setUploadProgress] = useState({})
	const [file, setFile] = useState({})
	const [showModal, setShowModal] = useState(false)

	const onFileAdded = (file) => {
		setFile(file[0]);
		setShowModal(true)
	}

	const renderProgress = (file) => {
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
		setFile({})
	}

	const uploadFiles = async () => {
		setUploadProgress({})
		setUploading(true)
		const promises = [];
		promises.push(sendRequest(file));
		try {
			await Promise.all(promises);
			
			setSuccessfullUploaded(true)
			setUploading(false)
		} catch (e) {
			setSuccessfullUploaded(true)
			setUploading(false)
		}
	}

	const sendRequest = (file) => {
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
		 formData.append("file", file, file.name);
	 
		 req.open("POST", "http://localhost:8000/upload");
		 req.send(formData);
		});
	 }

	return (
		<div className="Upload">
		<div className="Content">
			<div>
				<Dropzone
					onFileAdded={onFileAdded}
					disabled={uploading || successfullUploaded}
				/>
			</div>
			<Modal
				title="Upload Profile Picture"
				visible={showModal}
				onOk={uploadFiles}
				onCancel={toggleModal}
				okText="Upload"
			>
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
	</div>
	);
}
 
export default Upload;