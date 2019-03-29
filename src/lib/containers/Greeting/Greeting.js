import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';

export default class Greeting extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            });
    }

    loginClick = () => {
        this.props.login();
    }

    postSelectedHandler = (id) => {
        console.log(id);
        this.setState({selectedPostId: id});
    }

    render() {

        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />;
        });

        return (
            <div>
                <h1>{this.props.greeting}</h1>
                <button className="btn btn-primary" onClick={this.loginClick}>Greetings</button>
                <hr></hr>
                {posts}
            </div>
        )
    }
}
