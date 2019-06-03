import React from 'react';
import "./Image.scss";


const Image = (props) => {
	console.log(props.image)

	return (

		<div class="mainImage">

			<img src={props.image} alt="myImage" />

		</div>
	)
}

export default Image;