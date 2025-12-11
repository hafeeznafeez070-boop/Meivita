import { gql } from 'graphql-tag';

import { PAGE_FRAGMENT } from '../fragments/page';

export const PAGE = gql`
  query page($handle: String!, $country: CountryCode!, $language: LanguageCode!)
  @inContext(country: $country, language: $language) {
    page(handle: $handle) {
      ...Page
    }
  }
  ${PAGE_FRAGMENT}
`;
