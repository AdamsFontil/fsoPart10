import { gql } from "@apollo/client"

const SIGN_IN = gql`
mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    user {
      username
      reviewCount
      createdAt
      id
    }
    accessToken
    expiresAt
  }
}
`;


export default SIGN_IN
