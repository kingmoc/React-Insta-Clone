import React from 'react';
import "./AddComments.scss"

import { InputGroup, Input } from 'reactstrap';

const AddComments = (props) => {

	return (

		<div className="addCom">

			<InputGroup>
				<Input placeholder="Add Comment" />
			</InputGroup>

		</div>
	)
}

export default AddComments;