<script setup lang="ts">
import type {
  ProductFragment,
  ProductVariantFragment,
  SellingPlanGroupFragment,
  SellingPlanFragment
} from '@@/types/shopify'

// Props
const props = defineProps<{
  product: ProductFragment
  variants: ProductVariantFragment[]
  matchingColors: ProductFragment[]
  color: string
  faqs: Array<{ question: string; answer: string }>
  desc: string
  cert: string
}>()

// Route
const route = useRoute()
const router = useRouter()
const variantQuery = computed(() => route.query.variant as string)

// State
const selectedOptions = ref<Record<string, string>>({})
const selectedSellingPlan = ref<string | 'onetime'>('onetime')

// Groups all available option values (Color, Size, Material, etc.)
const optionGroups = computed(() => {
  const groups: Record<string, string[]> = {}
  if (!props.variants?.length) return groups

  props.variants.forEach((variant) => {
    variant.selectedOptions?.forEach(({ name, value }) => {
      if (!groups[name]) groups[name] = []
      if (!groups[name].includes(value)) groups[name].push(value)
    })
  })

  return groups
})

// Finds/updates the current variant
const isMatchingVariant = (variant: ProductVariantFragment) => {
  return variant.selectedOptions.every(({ name, value }) => {
    return selectedOptions.value[name] === value
  })
}

const currentVariant = computed(() => {
  if (!props.variants?.length) return null
  return props.variants.find(isMatchingVariant) || props.variants[0] || null
})

// Selling plan groups
const sellingPlanGroups = computed<SellingPlanGroupFragment[]>(() => {
  if (!props.product?.sellingPlanGroups) return []
  return flattenConnection(props.product?.sellingPlanGroups || [])
})

// Flatten plans from groups
const sellingPlans = computed<SellingPlanFragment[]>(() => {
  if (!sellingPlanGroups.value?.length) return []
  return sellingPlanGroups.value.flatMap((group) =>
    group?.sellingPlans?.edges?.map((edge) => edge.node) || []
  )
})

// Build subscription feature list
const getSubscriptionFeatures = (plan?: SellingPlanFragment) => {
  if (!plan) return []
  const discount =
    plan?.priceAdjustments?.[0]?.adjustmentValue?.adjustmentPercentage || 0
  const frequency = plan?.options?.[0]?.value || ''
  return [
    'Free Delivery With Your First UK Order',
    discount ? `Save ${discount}% Every Time` : 'Standard Pricing',
    frequency || 'Flexible Frequency',
    'Edit, Skip Or Cancel Anytime'
  ]
}

// Calculate discounted price for subscription
const getDiscountedPrice = (plan?: SellingPlanFragment) => {
  if (!plan || !currentVariant.value) return null
  const discount =
    plan?.priceAdjustments?.[0]?.adjustmentValue?.adjustmentPercentage || 0
  const base = Number(currentVariant.value?.price?.amount || 0)
  if (!discount || !base) return base?.toFixed?.(2) || null
  const discounted = base - (base * discount) / 100
  return discounted.toFixed(2)
}

// Get initial variant
const getInitialVariant = () => {
  if (!props.variants?.length) return undefined
  if (props.variants.length === 1) return props.variants[0]

  if (variantQuery.value) {
    return props.variants.find(
      (variant) => formatVariantId(variant.id) === variantQuery.value
    )
  }
  return undefined
}

// Set formatted variant ID to URL
const setVariantId = (variant: ProductVariantFragment | undefined) => {
  const query = { ...route.query }
  if (variant) {
    query.variant = formatVariantId(variant.id)
  } else {
    delete query.variant
  }
  router.replace({ query })
}

// Set initial variant and sync options
onMounted(() => {
  const initialVariant = getInitialVariant()
  if (initialVariant) {
    initialVariant.selectedOptions.forEach(({ name, value }) => {
      selectedOptions.value[name] = value
    })
    setVariantId(initialVariant)
  }
})

// Actions
const selectOption = (name: string, value: string) => {
  selectedOptions.value[name] = value
}
</script>

<template>
  <div class="relative lg:sticky lg:top-[calc(var(--header-height)+1px)]">
    <div class="flex flex-col gap-5 w-full">
      <!-- Product Header -->
      <ProductHeader v-if="product" :product="product" :current-variant="currentVariant" />

      <!-- Color Options (legacy UI, optional) -->
      <ProductColorOptions v-if="matchingColors && matchingColors.length" :product="product"
        :matching-colors="matchingColors" />

      <!-- Generic Variant Options -->
      <div v-for="(values, optionName) in optionGroups" :key="optionName" :class="`mb-4 ${optionName}`">
        <p class="font-medium mb-2">{{ optionName }}</p>
        <div class="flex gap-2 flex-wrap">
          <button v-for="value in values" :key="value" class="px-3 py-1 border rounded"
            :class="{ 'bg-black text-white': selectedOptions[optionName] === value }"
            @click="selectOption(optionName, value)">
            {{ value }}
          </button>
        </div>
      </div>



      <!-- Purchase Options -->
      <div v-if="currentVariant" class="flex flex-col gap-3">
        <!-- One-time -->
        <label
          class="flex items-center justify-between gap-4 cursor-pointer bg-[#F2F2F2] rounded-lg p-3 text-[16px] px-[19px] py-[12px] mb-[14px]">
          <div class="flex items-center gap-2">
            <input type="radio" value="onetime" v-model="selectedSellingPlan" class="accent-black" />
            <span class="font-medium">One-Time Purchase</span>
          </div>
          <span class="font-normal text-[#000000] text-[16px]">
            {{ currentVariant?.price?.amount }}
            {{ currentVariant?.price?.currencyCode }}
          </span>
        </label>

        <!-- Subscription -->
        <label v-for="plan in sellingPlans" :key="plan.id"
          class="flex flex-col gap-2 cursor-pointer bg-[#F2F2F2] rounded-lg p-3 text-[16px] px-[19px] pt-[16px] pb-[46px]">
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <input type="radio" :value="plan.id" v-model="selectedSellingPlan" class="accent-black" />
              <span class="font-medium">Subscribe & Save</span>
            </div>
            <div class="flex gap-[8px] items-center">
              <!-- Discount badge -->
              <span v-if="plan.priceAdjustments.length" class="text-[#9E0000] text-[14px] font-normal">
                -{{ plan.priceAdjustments[0].adjustmentValue.adjustmentPercentage }}%
              </span>

              <!-- Discounted price -->
              <span class="font-normal text-[#000000] text-[16px]">
                {{ getDiscountedPrice(plan) }}
                {{ currentVariant?.price?.currencyCode }}
              </span>
            </div>
          </div>

          <!-- Features list -->
          <ul class="text-[14px] text-black space-y-1 list-none mt-[10px]">
            <li v-for="(feature, i) in getSubscriptionFeatures(plan)" :key="i" class="flex items-center gap-2 p-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.49998L4.5 9.49998L1.75 6.74998L2.455 6.04498L4.5 8.08498L9.795 2.79498L10.5 3.49998Z"
                  fill="black" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </label>
      </div>

      <!-- Add to cart -->
      <div class="flex items-center gap-6">
        <ProductAddToCart v-if="currentVariant" :current-variant="currentVariant" :variants="variants"
          :selling-plan-id="selectedSellingPlan === 'onetime' ? null : selectedSellingPlan" :color="color" class="w-full"/>
      </div>

      <p class="text-[16px] text-[#010101] font-normal">
        Free shipping on UK orders over £35
      </p>

      <!-- FAQ & Description -->
      <ProductFaq v-if="faqs?.length || desc" :faqs="faqs" :description="desc" :cert="cert" :color="props.color"  />
    </div>
  </div>

  <KlaviyoBackInStockModal :variant-id="variantQuery" />
</template>

<style scoped>
.Title {
  display: none;
}
</style>