import React, { Component } from 'react';
import dummyData from "./data/dummy-data"
import "./App.scss"

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

// import { Container } from 'reactstrap';


class App extends Component {

 state = {
      input: '',
      data: []
    };
    // console.log(this.state.data)
  

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  search = () => {
    console.log("works")
  }

 render() {
   // console.log(array);   

    return (
      <div>
          
          <SearchBar />
          {this.state.data.map((post, index) => 
          <PostContainer 
          key={post.id} 
          post={post}
          like={this.like}
          commentHide={this.commentHide}
          handleChanges={this.handleChanges}
          commentArray={post.comments}
          />)}          
        
      </div>
    );
  }
}


export default App;