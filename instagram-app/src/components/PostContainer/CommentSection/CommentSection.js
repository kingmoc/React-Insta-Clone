import React from 'react';
import Comments from './Comments/Comments'
import AddComments from './AddComments/AddComments'
import "./CommentSection.scss"
import { Container } from 'reactstrap';
import Moment from 'react-moment';

class CommentSection extends React.Component {
	state = {
		commentArray: this.props.commentArray
	}

	updateCommentArray = (commentTxt) => {
		
		let commentTemp = [...this.state.commentArray, { username: localStorage.getItem('username'), text: commentTxt }];
		// console.log(commentTemp)

		this.setState({
			commentArray: commentTemp
		})
	}

	render() {
		
		//console.log(this.props.commentArray)
		return (

			<div>

				<Container>

					<Comments 
					likes={this.props.likes}
					comments={this.state.commentArray}
					like={this.props.like}
					commentHide={this.props.commentHide}
					/>

					<Moment className="date" parse="MMMM Do YYYY, h:mm:ss a" fromNow>
						{this.props.time}
					</Moment>			
					
				</Container>

				<AddComments 
					handleChanges={this.props.handleChanges}
					updateCommentArray={this.updateCommentArray} 
				/>

			</div>
		)
	}
}

export default CommentSection;