import React from 'react';
import PostContainer from '../PostContainer/PostContainer'
import SearchBar from  '../SearchBar/SearchBar'
import dummyData from '../../data/dummy-data'
import TopNav from '../TopNav/TopNav'

class PostPage extends React.Component {

	state = {
		 searchInput: '',
		 postSearch: [],
		 data: []
	   };
	   //console.log(this.state.data)
	 
   
	 componentDidMount() {
	   this.setState({ data: dummyData })
	   console.log(this.state.data)
	 }
   
	handleChanges = e => {
		this.setState({
			searchInput: e.target.value
			})
	 }
	 
	 search = (e) => {
	   
		const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))

		this.setState({ postSearch: filtered })
   
	 }
   
	render() {
		let allPost = this.state.postSearch.length ? this.state.postSearch : this.state.data;
		// let allPost = this.state.data
		console.log(this.state.data);   
   
	   return (
		 <div>
			 
			 <TopNav search={this.search}/>			

			 {allPost.map((post, index) => 
			 <PostContainer 
			 key={post.id} 
			 post={post}
			 commentArray={post.comments}
			/>)}
	   
		 </div>
	   );
	 }
   }
   
   
   export default PostPage;