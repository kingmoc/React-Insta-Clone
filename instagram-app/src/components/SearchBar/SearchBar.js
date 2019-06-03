import React from 'react';
import "./SearchBar.scss"

import { Container, Row, Col, InputGroup, Input } from 'reactstrap';

const SearchBar = (props) => {

	return (

		<div> 

			<Container>
				
				<InputGroup>
					<Input placeholder="Search ... " />
				</InputGroup>
				
			</Container>
			
		
 		</div>

	)
}

export default SearchBar;