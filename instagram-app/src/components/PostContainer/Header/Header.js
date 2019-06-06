import React from 'react';
import "./Header.scss";

const Header = (props) => {
	// console.log(props.username)

	return (

		<header>

			<img src={props.thumb} alt={props.username} />
			<h4> {props.username} </h4>

		</header>
	)
}

export default Header;