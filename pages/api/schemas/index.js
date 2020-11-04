import { gql } from "appolo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
  }
`;

/*
    Here, we define a User type that describes the shape of a Github user.
    It expects an id of type ID, a login, and an avatar_url of type String.
    Then, we use the type on the getUsers query that has to return an array 
    of users. Next, we rely on the getUser query to fetch a single user. 
    It needs to receive the name of the user in order to retrieve it.

*/
