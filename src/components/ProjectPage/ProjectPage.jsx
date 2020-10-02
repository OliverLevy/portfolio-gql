import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function ProjectPage() {
  return (
    <Query
      query={gql`
        {
          project(where: { id: "ckfsst7lc17xl0178msbipofg" }) {
            id
            html
            expressJs
            firebase
            learningExperience
            problem
            projectDescription
            projectDuration
            projectName
            reactJs
            reactNative
            roles
            roughProjectDate
            sass
            shortDescription
            userProfile
            websiteUrl
            galleryImages {
              url
              id
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <h1>loading</h1>;
        if (error) return <h1>error :(</h1>;
        console.log(data);
        const item = data.project;
        return (
          <div key={item.id}>
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
            {item.learningExperience && <p>{item.learningExperience}</p>}
            {item.problem && <p>{item.problem}</p>}
            {item.projectDescription && <p>{item.projectDescription}</p>}
            {item.roles && <p>{item.roles}</p>}
            {item.userProfile && <p>{item.userProfile}</p>}
            {item.websiteUrl && <p>{item.websiteUrl}</p>}
            {item.galleryImages &&
              item.galleryImages.map((img) => {
                return (
                  <div key={img.id}>
                    <img
                      src={img.url}
                      alt={`${item.projectName}`}
                    />
                  </div>
                );
              })}
          </div>
        );
      }}
    </Query>
  );
}
