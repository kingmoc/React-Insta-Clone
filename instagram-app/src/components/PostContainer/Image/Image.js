import React from 'react';
import "./Image.scss";


const Image = (props) => {
	// console.log(props.image)

	return (

		<div className="mainImage">

			<img src={props.image} alt="myImage" />

		</div>
	)
}

export default Image;