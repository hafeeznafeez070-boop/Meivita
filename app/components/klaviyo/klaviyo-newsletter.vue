<script setup lang="ts">
import { VueTelInput } from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';

// State
const email = ref('');
const phone = ref('');
const birthday = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const isLoading = ref(false);

// Helpers
const { subscribe } = useKlaviyo();
const listId = 'StGPx7';

// Klaviyo subscribe
const handleSubscribe = async () => {
  errorMessage.value = '';
  successMessage.value = '';
  isLoading.value = true;

  if (!isEmail(email.value)) {
    errorMessage.value = 'Please enter a valid email address.';
    isLoading.value = false;
    return;
  }

  try {
    await subscribe({
      data: {
        type: 'subscription',
        attributes: {
          list_id: listId,
          custom_source: 'Website Form',
          profile: {
            email: email.value,
            phone_number: phone.value || undefined,
            birthday: birthday.value || undefined
          }
        }
      }
    });

    successMessage.value = 'You have successfully subscribed!';
  } catch (error: any) {
    errorMessage.value = `${error.message}. Please try again later.`;
  } finally {
    email.value = '';
    phone.value = '';
    birthday.value = '';
    isLoading.value = false;
  }
};

// Watchers
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    errorMessage.value = '';
    successMessage.value = '';
  }
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <form novalidate @submit.prevent="handleSubscribe">
      <!-- Email -->
      <div class="relative w-full mb-2.5">
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          placeholder="Email Address"
          required
          class="flex w-full py-2 px-3.5 bg-white border border-zinc-300 rounded-md placeholder:text-zinc-400 bg-[#F3F2E4]"
        >
      </div>

      <!-- Phone with Country Selector -->
      <div class="relative w-full mb-2.5 bg-[#F3F2E4]">
        <VueTelInput
          v-model="phone"
          mode="international"
          placeholder="Phone Number (optional)"
          class="w-full bg-[#F3F2E4]"
        />
      </div>

      <!-- Birthday -->
      <div class="relative w-full mb-4">
        <input
          id="birthday"
          v-model="birthday"
          name="birthday"
          type="date"
          placeholder="Birthday (optional)"
          class="flex w-full py-2 px-3.5 bg-white border border-zinc-300 rounded-md placeholder:text-zinc-400 bg-[#F3F2E4]"
        >
      </div>

      <!-- Button -->
      <button
        type="submit"
        :disabled="isLoading"
        class="flex items-center justify-center p-2 px-8 bg-[#679A1A] border border-zinc-300 rounded-full transition duration-200 hover:bg-zinc-200 text-white text-xl"
      >
        {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </form>

    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-blue-600">{{ successMessage }}</p>
  </div>
</template>
