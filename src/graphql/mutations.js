import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        username
      }
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;
