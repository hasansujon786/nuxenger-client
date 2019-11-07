<template>
  <div class="signup-page h-screen bg-gray-100">
    <section class="bg-orange-300">img</section>
    <section class="flex flex-col items-center pt-40">
      <h1 class="text-5xl font-semibold">nuxenger</h1>
      <p class="-mt-1 mb-6 text-sm text-gray-600">Welcome back! Please login to your account.</p>

      <form @submit.prevent="handleSubmit" class="" style="width: 400px">
        <ui-input label="Fullname" type="text" placeholder="Enter your fullname" />
        <ui-input label="Username" type="text" placeholder="Enter a username" />
        <ui-input label="Email" type="email" placeholder="Enter your email" />
        <ui-input label="Password" type="password" placeholder="Enter your password" />

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
