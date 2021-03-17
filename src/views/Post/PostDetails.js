import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostService from '../../services/post.service';

export default class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {},
        };
    }
    async componentDidMount() {
        let {id} = this.props.match.params;
        let  reponse = await PostService.details(id);
        this.setState({post: reponse.data});
    }

    async handleDelete() {
        let {post} = this.state;
      await PostService.delete(post.id);
      this.props.history.push('/articles')
    }

    render() {
        let { post } = this.state;
        return <div className="container">
          <h1>Articles - {post.title}</h1>
          <h2>Detail</h2>
          <p>{post.body}</p>

          <button className="btn btn-danger" onClick={() => this.handleDelete()}>Suprimer</button>
        </div>
    }
}