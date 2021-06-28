import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginPage from "./domain/login/LoginPage";
import BlogPage from "./domain/blog/BlogPage";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route exact path="/blog" component={BlogPage}/>
                </Switch>
            </Router>
        )
    }
}