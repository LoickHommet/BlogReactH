import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/Post';
import PostService from '../../services/post.service';
import UserService from '../../services/user.service';
import UserList from '../User/UserList';


export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        let posts = await PostService.list(3);
        this.setState({ posts: posts});
    }

    render() {
        let {posts} = this.state;
        return <div className="container">
            <h1>Liste des articles</h1>
            <Link className="btn btn-primary" to="/articles/ajouter">Ajouter un article</Link>
            <div className="row">
                {posts.map(post => {                   
                    return <div className="col-md-4">
                        <Post post={post} />
                    </div>
                })}
            </div>
        </div>
    }
}
