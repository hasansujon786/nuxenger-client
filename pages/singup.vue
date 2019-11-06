<template>
  <div class="signup-page h-screen">
    <section class="bg-orange-300">img</section>
    <section class="flex flex-col items-center justify-center">
      <h1 class="text-5xl font-semibold">nuxenger</h1>
      <p class="-mt-1 mb-6 text-sm text-gray-600">Welcome back! Please login to your account.</p>

      <form @submit.prevent="handleSubmit" class="" style="width: 400px">
        <div>
          <ui-input label="Fullname" type="text" placeholder="Enter your fullname" />
        </div>

        <div>
          <ui-input label="Username" type="text" placeholder="Enter a username" />
        </div>

        <div>
          <ui-input label="Email" type="email" placeholder="Enter your email" />
        </div>

        <div class="mt-3">
          <ui-input label="Password" type="password" placeholder="Enter your password" />
        </div>

        <div class="mt-6 flex justify-between">
          <ui-button>Sign up</ui-button>
          <ui-button type="button" @click="$router.push('/login')">Sign in</ui-button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import Input from '~/components/ui/Input.vue'
import ButtonVue from '~/components/ui/Button.vue'
export default {
  components: {
    uiInput: Input,
    uiButton: ButtonVue
  },
  methods: {
    handleSubmit() {
      console.log('from submit')
    }
  }
}
</script>

<style scoped>
.signup-page {
  display: grid;
  grid-template-columns: 500px auto;
}
</style>
