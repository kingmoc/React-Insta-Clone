import React from 'react';

const Header = (props) => {
	console.log(props.username)

	return (

		<div>

			<img src={props.thumb} alt={props.username} />
			<h4> {props.username} </h4>

		</div>
	)
}

export default Header;