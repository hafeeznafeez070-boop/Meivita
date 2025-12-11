import { gql } from 'graphql-tag'

export const MAIN_MENU_FRAGMENT = gql`
  fragment MainMenuFields on MenuItem {
    id
    title
    url
    items {
      id
      title
      url
    }
  }
`
