import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './views/Homes';
import Header from './components/Header';
import PostList from './views/Post/PostList';
import PostAdd from './views/Post/PostAdd';
import PostDetails from './views/Post/PostDetails';
import PostUdapte from './views/Post/PostUdapte';
import UserList from './views/User/UserList';
import User from './components/User';
import UserAdd from './views/User/UserAdd';
import UserDetails from './views/User/UserDetails';


export default class App extends Component {

  render() {
    return <BrowserRouter>

      <Header />
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={PostList} />
        <Route exact path="/articles/ajouter" component={PostAdd} />
        <Route exact path="/articles/:id" component={PostDetails} />
        <Route exact path="/articles/:id/modifier" component={PostUdapte} />

        <Route exact path="/utilisateurs" component={UserList} />
        <Route exact path="/utilisateurs/ajouter" component={UserAdd} />
        <Route exact path="/utilisateurs/:id" component={UserDetails} />


      </switch>
    </BrowserRouter>
  }
}