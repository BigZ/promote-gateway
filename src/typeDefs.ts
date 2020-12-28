import { gql } from 'apollo-server';

export default gql`
  interface Resource {
    id: ID!
    name: String!
    slug: String!
  }
  
  interface WithPictures {
    mainPicture: String
    pictures: [String]
  }
  
  type Artist implements Resource, WithPictures {
    id: ID!
    name: String!
    slug: String!
    biography: String
    socialMedias: [String]
    labels: [Label]
    shows: [Show]
    mainPicture: String
    pictures: [String]
  }

  type Label implements Resource, WithPictures {
    id: ID!
    name: String!
    slug: String!
    description: String
    artists: [Artist]
    mainPicture: String
    pictures: [String]
    socialMedias: [String]
    mainPicture: String
    pictures: [String]
  }

  type Show implements Resource, WithPictures {
    id: ID!
    name: String!
    slug: String!
    description: String
    artists: [Artist]
    mainPicture: String
    pictures: [String]
    socialMedias: [String]
    mainPicture: String
    pictures: [String]
  }
  
  type Query {
    artists: [Artist]
    labels: [Label]
    shows: [Show]
  }
`;
