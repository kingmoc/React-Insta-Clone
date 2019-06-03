import React from 'react';
import Comments from '../Comments/Comments'
import AddComments from '../AddComments/AddComments'

const CommentSection = (props) => {

	return (

		<div>

			<Comments 
			likes={props.likes}
			comments={props.comments}
			/>
			<AddComments />

		</div>
	)
}

export default CommentSection;