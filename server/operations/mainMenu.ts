import type {
  GetMainMenuQuery,
  GetMainMenuQueryVariables
} from '@@/types/shopify'

import { GET_MAIN_MENU } from '../graphql/queries/mainMenu'
import { query } from '../utils/graphql-client'

/**
 * Fetches a Shopify menu by handle.
 * @param options - The variables for the menu query (handle)
 * @returns A Promise resolving to the menu
 * @see https://shopify.dev/docs/api/storefront/2025-01/queries/menu
 */
const mainMenu = async (
  options: GetMainMenuQueryVariables
): Promise<GetMainMenuQuery['menu']> => {
  const response = await query(GET_MAIN_MENU, options) as { data?: GetMainMenuQuery }
  return response.data?.menu ?? null
}

export default {
  mainMenu
}
