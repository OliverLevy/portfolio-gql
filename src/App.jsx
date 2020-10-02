import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Landing from "./components/Landing/Landing";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckfsqz2iu4lxn01yz1pbi4qcn/master",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Hello Walla</h1>
      <Landing/>
    </div>
  </ApolloProvider>
);

export default App;
