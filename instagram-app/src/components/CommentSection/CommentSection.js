import React from 'react';
import Comments from '../Comments/Comments'
import AddComments from '../AddComments/AddComments'

import { Container, Row, Col } from 'reactstrap';

const CommentSection = (props) => {

	return (

		<div>

			<Container>
				<Comments 
				likes={props.likes}
				comments={props.comments}
				/>
				<AddComments />
			</Container>

		</div>
	)
}

export default CommentSection;