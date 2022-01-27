import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName
          reviewCount
          ratingAverage
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    me {
      id,
      username
    }
  }
`;
