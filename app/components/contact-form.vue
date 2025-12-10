<template>
  <form @submit.prevent="onSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="name" class="block text-sm font-medium text-meivita-dark">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="mt-2 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-meivita-dark placeholder-black/40 outline-none focus:ring-2 focus:ring-meivita-green"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-meivita-dark">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="mt-2 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-meivita-dark placeholder-black/40 outline-none focus:ring-2 focus:ring-meivita-green"
          placeholder="you@example.com"
        />
      </div>
    </div>

    <div>
      <label for="subject" class="block text-sm font-medium text-meivita-dark">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        required
        class="mt-2 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-meivita-dark placeholder-black/40 outline-none focus:ring-2 focus:ring-meivita-green"
        placeholder="How can we help?"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-meivita-dark">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="6"
        class="mt-2 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-meivita-dark placeholder-black/40 outline-none focus:ring-2 focus:ring-meivita-green"
        placeholder="Write your message here..."
      />
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-meivita-dark/70" v-if="status === 'idle'">
        We usually respond within 1–2 business days.
      </p>
      <p class="text-sm text-green-700" v-else-if="status === 'success'">
        Message sent! We’ll be in touch shortly.
      </p>
      <p class="text-sm text-red-600" v-else-if="status === 'error'">
        Something went wrong. Please try again.
      </p>

      <button
        type="submit"
        :disabled="status === 'loading'"
        class="inline-flex items-center justify-center rounded-md bg-meivita-green px-4 py-2 text-white disabled:opacity-60 hover:opacity-90 transition"
      >
        <span v-if="status !== 'loading'">Send Message</span>
        <span v-else>Sending...</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type Form = {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<Form>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

async function onSubmit() {
  try {
    status.value = 'loading'
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    status.value = 'success'
    // Optionally reset the form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (e) {
    status.value = 'error'
  } finally {
    setTimeout(() => {
      if (status.value === 'success') status.value = 'idle'
    }, 3000)
  }
}
</script>
