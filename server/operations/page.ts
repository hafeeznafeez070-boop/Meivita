import type { PageQuery, PageQueryVariables } from '@@/types/shopify';

import { PAGE } from '../graphql/queries/page';
import { query } from '../utils/graphql-client';

/**
 * Fetches a page based on the given options.
 * @param options - The variables for the page query (handle)
 * @returns A Promise resolving to the page data
 * @see https://shopify.dev/docs/api/storefront/2025-01/queries/page
 */
const get = async (options: PageQueryVariables): Promise<PageQuery['page']> => {
  const response = (await query(PAGE, options)) as { data?: PageQuery };
  return response.data?.page;
};

export default {
  get
};
