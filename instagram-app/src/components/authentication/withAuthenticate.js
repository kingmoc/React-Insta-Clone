import React from 'react';

const withAuthenticate = Component => SecondCom => 

	class extends React.Component {

		render () {

			if(localStorage.getItem('username') && localStorage.getItem('password')) {
				console.log(localStorage.getItem('username'))
				return <Component />
			} else {
				return <SecondCom />
			}

		}
	}



export default withAuthenticate