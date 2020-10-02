import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const test = "id";

export default function Landing() {
  return (
    <div>
      <h1>this is my landing page</h1>
      <Query
        query={gql`
          {
            projects {
              ${test}
              projectName
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          //if loading, display loading
          if (loading) return <h2>loading...</h2>;
          //if error, display error :(
          if (error) return <h2>error :(</h2>;

          //console log the data that the query returns
          console.log(data);

          //needs to return something otherwise is crashes...
          return <div>walla</div>;
        }}
      </Query>
    </div>
  );
}
