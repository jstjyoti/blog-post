import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import Axios from 'axios';
import Axios from '../../Axios';
class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };
    componentDidMount() {
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
        this.setState({selectedPostId: id});
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Something Went Wrong</p>;

        if(!this.state.error){
            post = this.state.posts.map(el => {
                return <Post key={el.id} title={el.title} author={el.author} click={() => this.postSelectorHandler(el.id)}></Post>
            });
        }

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;