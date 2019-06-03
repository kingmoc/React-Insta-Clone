import React from 'react';
import "./Comments.scss"
import { Container, Row, Col } from 'reactstrap';

const Comments = (props) => {

	console.log(props.comments)

	return (

		<div>

			<Container>

				<Row>
					<Col><i class="far fa-heart"></i></Col>
					<Col><i class="far fa-comment"></i></Col>				
				</Row>

				<Row>
					<Col>{props.likes}</Col>
				</Row>					
					
				{props.comments.map(comment => {

					return (
						<Row>
							<Col>
								<span>{comment.username}</span> {comment.text}
							</Col>
						</Row>
					)

				})}				

			</Container>

		</div>
	)
}

export default Comments;