import React from 'react';
import "./SearchBar.scss"

import { Container, Row, Col, InputGroup, Input, Form } from 'reactstrap';

const SearchBar = (props) => {
	console.log(props.searchInput)

	return (

		<div className="search-bar"> 			
				
			<Form>
				<InputGroup>
					<Input 
					onChange={props.search}
					placeholder=" Search ... "
					name="searchInput"
					type="text"
					/>
				</InputGroup>
			</Form>						
		
 		</div>

	)
}

export default SearchBar;