import styled, { css } from 'styled-components';

export const TopNavStyle = styled.nav`

	background-color: white; 
	display: flex;
	justify-content: space-around;
	flex-direction: row;
	align-items: center;
	height: 70px;
	border-bottom: 1px solid #dee2e6;

	.insta {
		display: flex;
		flex-direction: row;
    	align-items: center;
	}

	.searchBarMiddle {
		display: flex;
	}

	.icons {
		display: flex;
		width: 180px;
		justify-content: space-evenly;
	}

	.form-control {
		background: #f8f9fa
		width: 300px;
		
	}

	.fab {
		font-size: 1.5rem;
	}

	.far {
		color: #343a40;
		margin-top: 0;
	}


`; // end call 