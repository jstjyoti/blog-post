import React, { Component } from 'react';

import NewPost from '../Blog/NewPost/NewPost';
import Posts from '../Blog/Posts/Posts';
import './Blog.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

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
                            <li><NavLink exact to="/" activeClassName="my-active" activeStyle={{
                                color: '#fa2d25',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post',
                                        hash: "#submit",
                                        search:"?quick-submit=true"}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* exact adds complete path checking otherwise just checks starts with*/}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/" component={Posts}/>
                    {/* <Redirect from='/' to='/new-post'></Redirect> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;