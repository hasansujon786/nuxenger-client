<template>
  <div class="signup-page h-screen bg-gray-100">
    <section class="bg-orange-300">img</section>
    <section class="flex flex-col items-center pt-24">
      <h1 class="text-5xl font-semibold">nuxenger</h1>
      <p class="-mt-1 mb-6 text-sm text-gray-600">Welcome back! Please login to your account.</p>

      <form @submit.prevent="handleSignUpSubmit" class="" style="width: 400px">
        <ui-input
          v-model="signUp.fullname"
          label="Fullname"
          type="text"
          placeholder="Enter your fullname"
        />
        <ui-input
          v-model="signUp.username"
          label="Username"
          type="text"
          placeholder="Enter a username"
        />
        <ui-input
          v-model="signUp.email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <ui-input
          v-model="signUp.password"
          label="Password"
          type="password"
          placeholder="Enter a new password"
        />

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
import { authMixins } from '~/mixins'
import Input from '~/components/ui/Input.vue'
import ButtonVue from '~/components/ui/Button.vue'
export default {
  middleware: 'guest',
  data() {
    return {
      signUp: {
        fullname: 'Mokles Uddin',
        username: 'mokles',
        email: 'mokles@gmail.com',
        password: 'Test123123'
      }
    }
  },
  components: {
    uiInput: Input,
    uiButton: ButtonVue
  },
  methods: {
    handleSignUpSubmit() {
      console.log('from submit')
      // TODO: Validate from submition
      this.mixSignUpAnUser(this.signUp)
    }
  },
  mixins: [authMixins]
}
</script>

<style scoped>
.signup-page {
  display: grid;
  grid-template-columns: 500px auto;
}
</style>
