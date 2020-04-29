import React, { Component } from 'react';

import NewPost from '../Blog/NewPost/NewPost';
import Posts from '../Blog/Posts/Posts';
import './Blog.css';
import {Route, Link} from 'react-router-dom';

class Blog extends Component {
    
    render () {

        return (
            //properties of Link Component of react-router-dom
            // hash: "#submit",
            // search:"?quick-submit=true"
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{pathname: '/new-post',
                                        hash: "#submit",
                                        search:"?quick-submit=true"}}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* exact adds complete path checking otherwise just checks starts with*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;