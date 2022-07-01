import React, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPostData } from '../redux/actions/actions';

const AddPostModal = (props) => {
	const dispatch = useDispatch();

	const [postTitle, setPostTitle] = useState('');
	const [userId, setUserId] = useState(null);

	return (
		<Modal show={props.showModal} onHide={props.hideModal}>
			<ModalBody>
				<div>
					<label>Post Title</label>
					<input
						type='text'
						name='postTitle'
						onChange={(e) => setPostTitle(e.target.value)}
					/>
				</div>
				<div>
					<label>User Id</label>
					<input
						type='number'
						name='userId'
						onChange={(e) => setUserId(e.target.value)}
					/>
				</div>
			</ModalBody>
			<button
				className='btn btn-primary'
				onClick={() => {
					dispatch(addPostData({ userId, postTitle }));
					props.hideModal();
				}}
			>
				Submit Post
			</button>
		</Modal>
	);
};

export default AddPostModal;
