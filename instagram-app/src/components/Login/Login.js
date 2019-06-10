import React from 'react';
import "./Login.scss"

import { Button, Form, Label, Input, Container, Col, Row } from 'reactstrap';

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
			<Container className="login">
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						<Form onSubmit={this.login}> 

							<legend>My Insta Project Login</legend>
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
							<Col>
								<Button color="primary" size="lg">Login</Button>
							</Col>

						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Login;