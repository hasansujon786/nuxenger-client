<template>
  <div class="signup-page h-screen bg-gray-100">
    <section class="bg-orange-300">img</section>
    <section class="flex flex-col items-center pt-24">
      <h1 class="text-5xl font-semibold">nuxenger</h1>
      <p class="-mt-1 mb-6 text-sm text-gray-600">Welcome back! Please login to your account.</p>

      <form @submit.prevent="handleSubmit" class="" style="width: 400px">
        <ui-input label="Fullname" type="text" placeholder="Enter your fullname" />
        <ui-input label="Username" type="text" placeholder="Enter a username" />
        <ui-input label="Email" type="email" placeholder="Enter your email" />
        <ui-input label="Password" type="password" placeholder="Enter a new password" />

        <div class="mt-8 ">
          <ui-button class="w-full" primary>Sign up</ui-button>
          <!-- <div class="text-center mt-2">
            <span class="font-bold text-sm text-gray-500">OR</span>
          </div> -->
          <ui-button class="w-full mt-3" type="button" @click="$router.push('/login')"
            >Or sing in</ui-button
          >
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
