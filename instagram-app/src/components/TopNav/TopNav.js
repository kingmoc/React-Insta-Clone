import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import styled, { css } from 'styled-components';
import { TopNavStyle } from '../../styles/TopNav/TopNavStyle'

const TopNav = (props) => {


	const Image = styled.img`
	
		height: 2.5rem;
	
	
	`;

	return (

		<TopNavStyle>

			<div className="insta">
				<i class="fab fa-instagram"></i>
				<Image src="https://i.ibb.co/wrm22T6/instagram.png" alt="test" />
			</div>

			<div className="searchBarMiddle">
				<SearchBar search={props.search}/>
			</div>

			<div className="icons">
				<i class="far fa-compass"></i>
				<i class="far fa-heart"></i>
				<i class="far fa-user"></i>
			</div>

		</TopNavStyle>
	)
}

export default TopNav;