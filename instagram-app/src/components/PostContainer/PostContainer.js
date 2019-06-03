import React, { Component } from 'react';
import "./PostContainer.scss"

import Header from '../Header/Header'
import Image from '../Image/Image'
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {

	render() {
		console.log(this.props.post.imageUrl)
		return (

			<div>
				
				<Header 
				username={this.props.post.username}
				thumb={this.props.post.thumbnailUrl}
				/>

				<Image image={this.props.post.imageUrl}/>
				<CommentSection />

			</div>
		);
	}
}

export default PostContainer;