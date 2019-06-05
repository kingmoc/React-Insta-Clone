import React from 'react';
import "./AddComments.scss"


import { InputGroup, Input, Button, InputGroupAddon, Form } from 'reactstrap';

class AddComments extends React.Component {

	state = {
		input: ''
	}

	

	handleChanges = e => {
		//console.log(e.target.name);
		this.setState({
			input: e.target.value
		})
	}
	onSubEvent = e => {

		e.preventDefault();

		this.props.updateCommentArray(this.state.input);
		this.setState({
			input: ''
		})
		
	}


	render() {
		//console.log(this.state.commentArray)
		return (

			<div className="addCom">
				<Form onSubmit={this.onSubEvent}>
					<InputGroup>
						<Input
						className="addComment" 
						onChange ={this.handleChanges}
						value={this.state.input} 
						name="input"
						type="text"
						placeholder="Add Comment ..."
						/>
					</InputGroup>
				</Form>

			</div>
		)
	}
}

export default AddComments;