import React from 'react';
import "./Comments.scss"
import { Container, Row, Col } from 'reactstrap';

const Comments = (props) => {

	console.log(props.comments)

	return (

		<div>		

			<Row>
				<Col xs="auto"><i class="far fa-heart"></i></Col>
				<Col xs="auto"><i class="far fa-comment"></i></Col>	
			</Row>

			<Row>
				<Col>{props.likes} likes</Col>
			</Row>					
				
			{props.comments.map(comment => {

				return (
					<Row className="text-content">
						<Col>
							<span>{comment.username}</span> {comment.text}
						</Col>
					</Row>
				)

			})}		

		</div>
	)
}

export default Comments;