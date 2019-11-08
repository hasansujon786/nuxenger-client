<template>
  <div class="login-page h-screen bg-gray-100">
    <section class="bg-orange-300">img</section>
    <section class="flex flex-col items-center pt-40">
      <h1 class="text-5xl font-semibold">nuxenger</h1>
      <p class="-mt-1 mb-6 text-sm text-gray-600">Welcome back! Please login to your account.</p>

      <form @submit.prevent="handleSignInSubmit" class="" style="width: 400px">
        <ui-input
          v-model="signinForm.email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <ui-input
          v-model="signinForm.password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <div class="mt-8">
          <ui-button class="w-full" primary>Sign in</ui-button>
          <!-- <div class="text-center mt-2">
            <span class="font-bold text-sm text-gray-500">OR</span>
          </div> -->
          <ui-button class="w-full mt-3" type="button" @click="$router.push('/singup')"
            >Or sing up</ui-button
          >
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { SIGN_IN_MUTATION } from '~/gql'
import Input from '~/components/ui/Input.vue'
import ButtonVue from '~/components/ui/Button.vue'

export default {
  data() {
    return {
      signinForm: {
        email: 'kuddus@gmail.com',
        password: 'Test123123'
      }
    }
  },
  methods: {
    handleSignInSubmit() {
      const { email, password } = this.signinForm
      if (!email && !password) return
      this.signInWithEmailAndPassword(this.signinForm)
    },
    async signInWithEmailAndPassword({ email, password }) {
      try {
        // Call to the graphql mutation
        const { data } = await this.$apollo.mutate({
          mutation: SIGN_IN_MUTATION,
          variables: {
            email,
            password
          }
        })

        if (data.signIn) {
          // set authUser & chatList & redirect
          const { chats, ...user } = data.signIn
          this.$store.dispatch('user/setAuthUser', user)
          this.$store.dispatch('chats/setChatList', chats)
          this.$router.push('/')
        }
      } catch (err) {
        this.$router.push('/login')
        console.error(err)
        // dispatch('displayError', { err, msg: 'Error in signIn' })
      }
    }
  },
  components: {
    uiInput: Input,
    uiButton: ButtonVue
  }
}
</script>

<style scoped>
.login-page {
  display: grid;
  grid-template-columns: 500px auto;
}
</style>
