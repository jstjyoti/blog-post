import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
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
        }
        )
    }
    postSelectorHandler = (id) =>{
        this.setState({selectedPostId: id});
    }
    render () {
        const post = this.state.posts.map(el => {
            return <Post key={el.id} title={el.title} author={el.author} click={() => this.postSelectorHandler(el.id)}></Post>
        })
        return (
            <div>
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