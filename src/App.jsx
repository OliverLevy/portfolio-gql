import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
//temp for testing
import ProjectPage from "./components/ProjectPage/ProjectPage";

import "./App.css";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckfsqz2iu4lxn01yz1pbi4qcn/master",
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/:projectId">
          <ProjectPage />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
