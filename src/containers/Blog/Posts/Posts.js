import React, {Component} from 'react';
import Axios from '../../../Axios'
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component{

  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };
  componentDidMount() {
    this.loadData();
  }
  loadData(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( response =>{
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post =>{
            return {
                ...post,
                author: 'Jyoti'
            }
        })
        this.setState({posts: updatedPosts})
    })
    .catch(err => {
        this.setState({error: true})
    });
  }
  postSelectorHandler = (id) =>{
    this.props.history.push({pathname: '/' + id})
    // this.setState({selectedPostId: id});

  }

  render(){
    let post = <p style={{textAlign:'center'}}>Something Went Wrong</p>;

        if(!this.state.error){
            post = this.state.posts.map(el => {
                // <Link to={'/'+el.id} key={el.id}>
                 return <Post key={el.id} title={el.title} author={el.author} click={() => this.postSelectorHandler(el.id)}></Post>
                // </Link>
            });
        }
    return <div>
      <section className="Posts">
        {post}
      </section>
      {/* this.props.match.url + '/:id for dynamic routes */}
      <Route path= '/:id'  component={FullPost}></Route>
    </div>
    
  }
}

export default Posts;