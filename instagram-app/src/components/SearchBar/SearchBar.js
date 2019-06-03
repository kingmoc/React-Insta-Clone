import React from 'react';
import "./SearchBar.scss"

import { Container, Row, Col, InputGroup, Input } from 'reactstrap';

const SearchBar = (props) => {

	return (

		<div className="search-bar"> 			
				
			<InputGroup>
				<Input placeholder="Search ... " />
			</InputGroup>			
		
 		</div>

	)
}

export default SearchBar;