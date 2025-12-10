<script setup lang="ts">
// Stores
const authStore = useAuthStore();

// Customer obj
const customer = reactive({
  email: '',
  password: ''
});

// State
const errorMessage = ref('');
const isLoading = ref(false);
const rememberMe = ref(false);

// Login
const isAuth = computed(() => authStore.isAuthenticated);
const formCompleted = computed(() => customer.email && customer.password);

const handleLogin = async () => {
  errorMessage.value = '';
  isLoading.value = true;

  if (!formCompleted.value) {
    errorMessage.value =
      'Please fill out both email and password fields to sign in.';
    isLoading.value = false;
    return;
  }

  if (!isEmail(customer.email)) {
    errorMessage.value = 'Please enter a valid email address.';
    isLoading.value = false;
    return;
  }

  try {
    await authStore.login(customer.email, customer.password);

    if (isAuth.value) {
      await navigateTo('/account');
    }
  } catch (error: any) {
    errorMessage.value = `${error.message}. Please try again later.`;
  } finally {
    isLoading.value = false;
  }
};

// State
const showPassword = ref(false);

// Actions
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

// SEO
useHead({
  title: 'Login'
});
</script>

<template>
  <div class="flex min-h-full">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mx-auto">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <div class="flex justify-center">
            <NuxtLink to="/">
              <span class="sr-only">Meivita</span>
              <NuxtImg class="h-36 w-auto" src="/img/meivita-logo-green.png" alt="Meivita" />
            </NuxtLink>
          </div>
          <h2 class="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          <p class="mt-2 text-sm/6 text-gray-500">
            Don't have an account?
            <NuxtLink to="/account/register" class="font-semibold text-meivita-green hover:text-[#5a8022]">
              Create an account
            </NuxtLink>
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form @submit.prevent="handleLogin" class="space-y-6" novalidate>
              <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                  <input id="email" v-model="customer.email" name="email" type="email" autocomplete="email" required
                    placeholder="Email Address"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-meivita-green sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                <div class="mt-2 relative">
                  <input id="password" v-model="customer.password" name="password"
                    :type="showPassword ? 'text' : 'password'" autocomplete="current-password" required
                    placeholder="Password" minLength="8"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-meivita-green sm:text-sm/6" />
                  <button type="button" class="absolute inset-y-0 end-0 flex items-center px-3" @click="togglePassword">
                    <Icon name="ph:eye" class="h-5 w-5 shrink-0"
                      :class="showPassword ? 'text-meivita-green-dark' : 'text-zinc-400'" />
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex gap-3">
                  <div class="flex h-6 shrink-0 items-center">
                    <div class="group grid size-4 grid-cols-1">
                      <input id="remember-me" v-model="rememberMe" name="remember-me" type="checkbox"
                        class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-meivita-green checked:bg-meivita-green indeterminate:border-meivita-green indeterminate:bg-meivita-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meivita-green disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                      <svg
                        class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        viewBox="0 0 14 14" fill="none">
                        <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                        <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <label for="remember-me" class="block text-sm/6 text-gray-900">Remember me</label>
                </div>

                <div class="text-sm/6">
                  <NuxtLink :to="{ name: 'account-recover' }"
                    class="font-semibold text-meivita-green hover:text-[#5a8022]">
                    Forgot password?
                  </NuxtLink>
                </div>
              </div>

              <div>
                <button type="submit" :disabled="isLoading"
                  class="flex w-full justify-center rounded-md bg-meivita-green px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#5e8621] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meivita-green disabled:opacity-60">
                  {{ isLoading === true ? 'Working...' : 'Sign in' }}
                </button>
              </div>
            </form>
          </div>

          <div v-if="errorMessage" class="mt-4">
            <p class="text-sm text-red-500 text-center">
              {{ errorMessage }}
            </p>
          </div>


        </div>
      </div>
    </div>
    <!-- <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 size-full object-cover"
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="">
    </div> -->
  </div>
</template>
