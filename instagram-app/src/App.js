import React from 'react';
import PostPage from './components/PostContainer/PostPage'
import withAuthenticate from './components/authentication/withAuthenticate'
import "./App.scss"
import Login from './components/Login/Login';


const App = () => {

  const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login)

  return (
    <div>
      {/* <Login /> */}
      <ComponentFromWithAuthenticate />
    </div>
  )

}


export default App;