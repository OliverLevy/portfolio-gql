import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function Resume() {
  return (
    <div>
      <Query
        query={gql`
          {
            resume(where: { id: "ckft4lgqo1drd0178razku1zt" }) {
              id
              name
              education {
                id
                schoolName
                stage
                subject
                typeOfEducation
                yearsAttended
                locationOfSchool
              }
              experience {
                id
                descriptionOfTasks
                companyName
                locationOfJob
                position
                yearsWorked
              }
              info {
                email
                github
                linkedIn
                phoneNumber
                skills
              }
              position
              profile {
                profile
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <h1>loading...</h1>;
          if (error) return <h1>error :(</h1>;

          // console.log(data);
          const item = data.resume;
          return (
            <div key={item.id}>
              {item.name && <h1>{item.name}</h1>}
              {item.position && <h2>{item.position}</h2>}
              <h3>Experience</h3>
              {item.experience &&
                item.experience.map((exp) => {
                  return (
                    <div key={exp.id}>
                      <h3>{exp.companyName}</h3>
                      <h3>{exp.position}</h3>
                      <h5>{exp.yearsWorked}</h5>
                      <p>{exp.descriptionOfTasks}</p>
                    </div>
                  );
                })}
              {item.education &&
                item.education.map((edu) => {
                  return (
                    <div key={edu.id}>
                      <h3>{edu.schoolName}</h3>
                      <h3>{edu.typeOfEducation}</h3>
                      <h3>{edu.subject}</h3>
                      <p>{edu.yearsAttended}</p>
                      <p>{edu.locationOfSchool}</p>
                    </div>
                  );
                })}
              {item.info && (
                <div>
                  <a href={`mailto:${item.info.email}`}>{item.info.email}</a>
                  <a href={item.info.github}>Github</a>
                  <a href={item.info.linkedIn}>LinkedIn</a>
                  <a href={`tel:${item.info.phoneNumber}`}>
                    {item.info.phoneNumber}
                  </a>
                </div>
              )}
              {item.info &&
                item.info.skills &&
                item.info.skills.map((skill, i) => {
                  return <p key={i}>{skill}</p>;
                })}
              {item.profile && (
                <div>
                  <p>{item.profile.profile}</p>
                </div>
              )}
            </div>
          );
        }}
      </Query>
    </div>
  );
}
