import React, { useEffect, useState } from 'react';
import AddPostModal from '../components/AddPostModal';
import { fetchPostData } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const PostPage = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.postsReducer);
	console.log('posts', posts);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log('called');
		dispatch(fetchPostData());
	}, []);

	return (
		<>
			<div style={{ color: '#fff' }}>
				<div className='d-flex'>
					<h4 style={{ paddingRight: '15px' }}>User-ID</h4>
					<h4 style={{ paddingRight: '15px' }}>Post-ID</h4>
					<h4 style={{ paddingRight: '15px' }}>Post-Title</h4>
				</div>
				{posts.map((item, index) => (
					<div key={index} className='d-flex'>
						<span style={{ paddingRight: '95px' }}>{item.userId}</span>
						<span style={{ paddingRight: '95px' }}>{item.id}</span>
						<span style={{ paddingRight: '95px' }}>{item.title}</span>
					</div>
				))}
			</div>
			<button onClick={() => setShowModal(true)}>Add Post</button>
			<AddPostModal
				showModal={showModal}
				hideModal={() => setShowModal(false)}
			/>
		</>
	);
};

export default PostPage;
