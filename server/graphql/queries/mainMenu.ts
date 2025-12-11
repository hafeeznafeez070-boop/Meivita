import { gql } from 'graphql-tag'
import { MAIN_MENU_FRAGMENT } from '../fragments/mainMenu'

export const GET_MAIN_MENU = gql`
  query getMainMenu($handle: String!) {
    menu(handle: $handle) {
      id
      title
      items {
        ...MainMenuFields
      }
    }
  }
  ${MAIN_MENU_FRAGMENT}
`
