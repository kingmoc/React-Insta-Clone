import React, { Component } from 'react';
import "./PostContainer.scss"

import Header from '../Header/Header'
import Image from '../Image/Image'
import CommentSection from '../CommentSection/CommentSection'

import { Card, CardTitle, Container, Row, Col } from 'reactstrap';

class PostContainer extends Component {


	render() {
		// console.log(this.props.commentArray)
		return (

			<div>
				
				<Container>
					<Row>
						<Col sm="12" md={{ size: 8, offset: 2 }}>
							<Card>
								<CardTitle>
									<Header 
									username={this.props.post.username}
									thumb={this.props.post.thumbnailUrl}
									/>
								</CardTitle>

								<Image image={this.props.post.imageUrl}/>
								<CommentSection 
								likes={this.props.post.likes}
								comments={this.props.post.comments}
								time={this.props.post.timestamp}
								like={this.props.like}
								commentHide={this.props.commentHide}
								handleChanges={this.props.handleChanges}
								commentArray={this.props.commentArray}
								/>
							</Card>
						</Col>
					</Row>
				</Container>

			</div>
		);
	}
}

export default PostContainer;