import { gql } from 'graphql-tag';

export const PAGE_FRAGMENT = gql`
  fragment Page on Page {
    id
    title
    handle
    bodySummary
    body
    createdAt
    updatedAt
    seo {
      description
      title
    }
  }
`;
