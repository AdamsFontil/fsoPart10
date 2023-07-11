import { gql } from "@apollo/client"

const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          description
          forksCount
          fullName
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
          url
          watchersCount
        }
      }
    }
  }
`;


export default GET_REPOSITORIES
