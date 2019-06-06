import React from 'react';
import "./Login.scss"

import { Button, Form, Label, Input, Container, Col } from 'reactstrap';

class Login extends React.Component {

	state = {
		username: "", 
		password: ""
	}

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	 }

	login = e => {
		e.preventDefault()

		localStorage.setItem('username', this.state.username)
		localStorage.setItem('password', this.state.password)

		window.location.reload()
		
	}


	render() {
	return (
			<Container>
				<Form onSubmit={this.login}> 

					<legend>Login</legend>
					<Label>Username</Label>
					<Input 
					onChange={this.handleChanges} 
					type="text" 
					name="username" 
					placeholder="username" 
					value={this.state.username}
					/>

					<Label for="examplePassword">Password</Label>
					<Input 
					onChange={this.handleChanges} 
					type="password" 
					name="password" 
					placeholder="type your password ..."
					value={this.state.password} 
					/>
					<Col sm={{ size: 10, offset: 2 }}>
						<Button>Login</Button>
					</Col>

				</Form>
			</Container>
		)
	}
}

export default Login;