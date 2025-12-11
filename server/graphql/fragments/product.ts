import { gql } from 'graphql-tag';

import { IMAGE_FRAGMENT } from './image';
import { MEDIA_IMAGE_FRAGMENT } from './mediaImage';
import { MODEL_3D_FRAGMENT } from './model3d';
import { PRICE_RANGE_FRAGMENT } from './priceRange';
import { PRODUCT_OPTION_FRAGMENT } from './productOption';
import { PRODUCT_VARIANT_FRAGMENT } from './productVariant';
import { SELLING_PLAN_GROUP_FRAGMENT } from './sellingPlanGroup';
import { VIDEO_FRAGMENT } from './video';

export const PRODUCT_FRAGMENT = gql`
  fragment Product on Product {
    availableForSale
    compareAtPriceRange {
      ...PriceRange
    }
    createdAt
    description
    descriptionHtml
    featuredImage {
      ...Image
    }
    handle
    id
    images(first: 250) {
      edges {
        node {
          ...Image
        }
      }
    }
    isGiftCard
    media(first: 250) {
      edges {
        node {
          alt
          id
          mediaContentType
          ... on MediaImage {
            ...MediaImage
          }
          ... on Model3d {
            ...Model3d
          }
          ... on Video {
            ...Video
          }
        }
      }
    }
    onlineStoreUrl
    options(first: 250) {
      ...ProductOption
    }
    priceRange {
      ...PriceRange
    }
    productType
    publishedAt
    requiresSellingPlan
    sellingPlanGroups(first: 250) {
      edges {
        node {
          ...SellingPlanGroup
        }
      }
    }
    tags
    title
    totalInventory
    trackingParameters
    updatedAt
    variants(first: 250) {
      edges {
        node {
          ...ProductVariant
        }
      }
    }

    # Custom Metafields
    details: metafield(namespace: "custom", key: "details") {
      value
    }
    faq: metafield(namespace: "custom", key: "faq") {
      value
    }
    extra_css_for_images: metafield(namespace: "custom", key: "extra_css_for_images") {
      value
    }
    extra_css_for_image_wrappers: metafield(namespace: "custom", key: "extra_css_for_image_wrappers") {
      value
    }
    icons_to_include: metafield(namespace: "custom", key: "icons_to_include") {
      value
    }
    shipping: metafield(namespace: "custom", key: "shipping") {
      value
    }

    # ✅ Single reference metafield (not references)
    details_images: metafield(namespace: "custom", key: "details_images") {
      value
      references(first: 20) {
        edges {
          node {
            ... on MediaImage {
              image {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }

    # ✅ Multiple references metafield
    ingredients: metafield(namespace: "custom", key: "ingradients_box") {
      value
      references(first: 20) {
        edges {
          node {
            ... on Metaobject {
              id
              type
              fields {
                key
                value
                reference {
                  ... on MediaImage {
                    image {
                      url
                      altText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }


    color: metafield(namespace: "custom", key: "product_color") {
      value
    }
    
    highlight_title: metafield(namespace: "custom", key: "product_highlight_title") {
      value
    }

    highlight_img: metafield(namespace: "custom", key: "product_hightlight_image") {
      value
      reference {
      ... on MediaImage {
          image {
            url
            altText
            width
            height
          }
        }
      }
    }


    certificate: metafield(namespace: "custom", key: "certificate") {
      type
      value
      reference {
        ... on MediaImage {
          image {
            url
          }
        }
        ... on Video {
          sources {
            url
          }
        }
        ... on GenericFile {
          url
        }
      }
    }

  }

  ${PRICE_RANGE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${MEDIA_IMAGE_FRAGMENT}
  ${MODEL_3D_FRAGMENT}
  ${VIDEO_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
  ${SELLING_PLAN_GROUP_FRAGMENT}
  ${PRODUCT_OPTION_FRAGMENT}
`;
