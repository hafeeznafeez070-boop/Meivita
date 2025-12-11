import { gql } from 'graphql-tag';

export const PRODUCT_WITH_SUBSCRIPTIONS = gql`
  query ProductWithSubscriptions($handle: String) {
    product(handle: $handle) {
      id
      title
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            sellingPlanAllocations(first: 10) {
              edges {
                node {
                  sellingPlan {
                    id
                    name
                    description
                    recurringDeliveries
                    options {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
