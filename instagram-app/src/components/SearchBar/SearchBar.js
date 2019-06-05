import React from 'react';
import "./SearchBar.scss"

import { Container, Row, Col, InputGroup, Input } from 'reactstrap';

const SearchBar = (props) => {

	return (

		<div className="search-bar"> 			

			<Container>
				<Row>
					<Col sm="12" md={{ size: 8, offset: 2 }}>	
						<InputGroup>
							<Input 
							placeholder="Search ... "
							/>
						</InputGroup>
					</Col>
				</Row>
			</Container>			
		
 		</div>

	)
}

export default SearchBar;