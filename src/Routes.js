import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import LoginPage from "./domain/login/LoginPage";
import BlogPage from "./domain/blog/BlogPage";


export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login"
                           render={() =>
                                <LoginPage token={this.props.token} setToken={this.props.setToken}></LoginPage>
                           }/>
                    <Route exact path="/blog"
                           return={() =>
                               <BlogPage token={this.props.token} setToken={this.props.setToken}></BlogPage>
                           }/>
                    <Route exact path="/">
                        <Redirect to="/blog"></Redirect>
                    </Route>
                </Switch>
            </Router>
        )
    }
}