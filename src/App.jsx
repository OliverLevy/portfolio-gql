import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
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
        <Route exact path="/" component={Landing} />
        <Route path="/project/:projectId" component={ProjectPage} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
