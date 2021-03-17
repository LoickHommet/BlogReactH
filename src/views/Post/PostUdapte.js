import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostService from '../../services/post.service';


export default class PostUdapte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            title: "",
            body: ""
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async componentDidMount() {
        let { id } = this.props.match.params;
        let reponse = await PostService.details(id);
        this.setState({
            post: reponse.data,
            title: reponse.data.title,
            body: reponse.data.body
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        let { title, body, post } = this.state;
       
        await PostService.update(post.id, { title: title, body: body, userId: 1 });
        this.props.history.push(`/articles${post.id}`);

        //   let reponse = await PostService.update(post.id, data );
        //    console.log(reponse);
    }

    render() {
        let { post, title, body } = this.state;
        return <div className="container">
            <h1>Modifier votre articles - {post.title}</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <lable>Titre</lable>
                    <input type="text" id="title" className="form-control" required
                        value={title}
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <lable>Contenu</lable>
                    <textarea id="body" row="5" className="form-control" required
                        value={body}
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>

        </div>
    }
}



