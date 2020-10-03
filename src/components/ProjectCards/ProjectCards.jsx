import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import "./ProjectCards.scss";

export default function ProjectCards() {
  return (
    <div>
      <Query
        query={gql`
          {
            projects {
              id
              projectName
              projectDuration
              reactJs
              reactNative
              sass
              html
              shortDescription
              firebase
              expressJs
              roughProjectDate
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
          // console.log(data);

          //needs to return something otherwise is crashes...
          return (
            <div>
              {data.projects.map((item) => {
                return (
                  <Link to={`/project/${item.id}`} key={item.id}>
                    <div className="project-card">
                      <h1>project card</h1>
                      <h1>{item.projectName}</h1>
                      <h3>{item.shortDescription}</h3>
                      <p>{item.projectDuration}</p>
                      <p>{item.roughProjectDate}</p>
                      {item.html && <p>html</p>}
                      {item.reactJs && <p>react js</p>}
                      {item.expressJs && <p>express js</p>}
                      {item.firebase && <p>firebase</p>}
                      {item.reactNative && <p>react Native</p>}
                      {item.sass && <p>sass</p>}
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        }}
      </Query>
    </div>
  );
}
