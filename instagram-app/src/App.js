import React, { Component } from 'react';
import dummyData from "./data/dummy-data"
import "./App.scss"

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: dummyData
    };
    console.log(this.state.data)
  }



  render() {

    return (

      <div>

          <SearchBar />
          {this.state.data.map(post => <PostContainer key={post.id} post={post}/>)}
        
      </div>
    );
  }
}


export default App;