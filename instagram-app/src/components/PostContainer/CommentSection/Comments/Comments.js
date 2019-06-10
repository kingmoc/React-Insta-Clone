import React from 'react';
import "./Comments.scss"
import { Row, Col } from 'reactstrap';


class Comments extends React.Component {

	state = {
		liked: false,
		likes: this.props.likes
	}

	like = e => {
			
		if(this.state.liked) {
			
			this.setState({
				liked: false,
				likes: this.state.likes - 1 
			})
		} else {
			this.setState({
				liked: true,
				likes: this.state.likes + 1
			})
		}

	}

	
	render () {
		return (

			<div>		

				<Row>
					<Col xs="auto"><i onClick={this.like} className={`${this.state.liked ? 'fas' : 'far'} fa-heart`}></i></Col>
					<Col xs="auto"><i onClick={this.props.commentHide} className="far fa-comment"></i></Col>	
				</Row>

				<Row>
					<Col>{this.state.likes} likes</Col>
				</Row>					
					
				{this.props.comments.map(comment => {

					return (
						<Row key={comment.id} className="text-content">
							<Col>
								<span>{comment.username}</span> {comment.text}
							</Col>
						</Row>
					)

				})}		

			</div>
		)
	}
}

export default Comments;