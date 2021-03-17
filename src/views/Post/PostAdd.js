import React, { Component } from 'react';
import PostService from '../../services/post.service';

export default class PostAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            body: null
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    async handleSubmit(e) {
        e.preventDefault();
        let { title, body } = this.state;

        let data = {
            title: title,
            body: body,
            userId: 1,
        }
        //ajout de l'articles
        let reponse = await PostService.create(data);
        console.log(reponse);
        // Redirection vers la listes des articles
        this.props.history.push('/articles');
    }

    render() {
        return <div className="container">
            <h1>Ajouter votre articles</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <lable>Titre</lable>
                    <input type="text" id="title" className="form-control" required
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <lable>Contenu</lable>
                    <textarea id="body" row="5" className="form-control" required
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>

    }
}
