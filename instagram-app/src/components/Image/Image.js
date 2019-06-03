import React from 'react';

const Image = (props) => {
	console.log(props.image)

	return (

		<div>

			<img src={props.image} alt="myImage" />

		</div>
	)
}

export default Image;