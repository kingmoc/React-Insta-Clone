import React from 'react';
import "./SearchBar.scss"

import { Container, Row, Col, InputGroup, Input, Form } from 'reactstrap';

const SearchBar = (props) => {
	console.log(props.searchInput)

	return (

		<div className="search-bar"> 			

			<Container>
				<Row>
					<Col sm="12" md={{ size: 8, offset: 2 }}>
						<Form 
						// onSubmit={props.search}
						value={props.searchInput}
						>
							<InputGroup>
								<Input 
								onChange={props.search}
								placeholder="Search ... "
								// value={props.searchInput}
								name="searchInput"
								type="text"
								/>
							</InputGroup>
						</Form>	
					</Col>
				</Row>
			</Container>			
		
 		</div>

	)
}

export default SearchBar;