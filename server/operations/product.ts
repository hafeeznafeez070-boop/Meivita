import type {
  ProductQuery,
  ProductQueryVariables,
  ProductRecommendationsQuery,
  ProductRecommendationsQueryVariables
} from '@@/types/shopify';

import { PRODUCT, RECOMMENDED_PRODUCTS } from '../graphql/queries/product';
import { PRODUCT_WITH_SUBSCRIPTIONS } from '../graphql/queries/product-subscription';
import { query } from '../utils/graphql-client';

/**
 * Fetches a product based on the given options.
 * @param options - The variables for the product query (handle, country, language)
 * @returns A Promise resolving to the product data
 * @see https://shopify.dev/docs/api/storefront/2025-01/queries/product
 */
const get = async (
  options: ProductQueryVariables
): Promise<ProductQuery['product']> => {
  const response = await query(PRODUCT, options) as { data?: ProductQuery };
  return response.data?.product;
};

/**
 * Retrieves recommended products based on a reference product.
 * @param options - The variables for the recommendation query (handle, country, language)
 * @returns A Promise resolving to an array of recommended products
 * @see https://shopify.dev/docs/api/storefront/2025-01/queries/productRecommendations
 */
const recommended = async (
  options: ProductRecommendationsQueryVariables
): Promise<ProductRecommendationsQuery['recommended']> => {
  const response = await query(RECOMMENDED_PRODUCTS, options) as { data?: ProductRecommendationsQuery };
  return response.data?.recommended;
};

/**
 * Fetches a product along with subscription selling plans.
 * @param handle - The product handle
 * @returns A Promise resolving to the product with subscription data
 * @see https://shopify.dev/docs/api/storefront/2025-01/objects/SellingPlanAllocation
 */
const getWithSubscriptions = async (
  handle: string
): Promise<ProductQuery['product']> => {
  const response = await query(PRODUCT_WITH_SUBSCRIPTIONS, { handle }) as { data?: ProductQuery };
  return response.data?.product;
};

export default {
  get,
  recommended,
  getWithSubscriptions
};
