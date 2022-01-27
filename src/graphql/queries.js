import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
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

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      reviewCount
      ratingAverage
      stargazersCount
      description
      language
      ownerAvatarUrl
      forksCount
    }
  }
`;

