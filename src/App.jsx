import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";

import "./App.css";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckfsqz2iu4lxn01yz1pbi4qcn/master",
});

const App = () => (
  <ApolloProvider client={client}>
    <Header/>
    <Landing />
  </ApolloProvider>
);

export default App;
