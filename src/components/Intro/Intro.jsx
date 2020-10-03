import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function Intro() {
  return (
    <div>
      <Query
        query={gql`
          {
            stylin(where: { id: "ckft7yjjc1f5q017998sw0we6" }) {
              border
              borderRadius
              height
              width
              background {
                hex
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <h1>loading...</h1>;
          if (error) return <h1>error :(</h1>;
          console.log(data);
          const btn = data.stylin;

          return (
            <div>
              <h1>This is the intro component</h1>
              <h2>
                Hello, <br />
                My name is Oli
              </h2>
              <p>
                I’m a full-stack web developer who
                <br /> designed furniture & lighting for Gabriel-Scott,
                <br /> repaired bikes for many years,
                <br /> loves his three beautiful dogs,
                <br /> Bill, Franklin and Chester.
              </p>
              <button style={btn}>
                nothing
              </button>
            </div>
          );
        }}
      </Query>
    </div>
  );
}
