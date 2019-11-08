import { SIGN_OUT_MUTATION, SIGN_IN_MUTATION, SIGN_UP_MUTATION } from '../gql'

export const authMixins = {
  methods: {
    async mixSignOutAuthUser() {
      console.log('testing signOutAuthUser')
      try {
        const { data } = await this.$apollo.mutate({
          mutation: SIGN_OUT_MUTATION
        })

        if (data.signOut) {
          // TODO: Clear all vuex user data
          this.$router.push('/login')
        }
      } catch (err) {
        console.error(err)
        // dispatch('displayError', { err, msg: 'Error in signOut' })
      }
    },
    async mixSignInWithEmailAndPassword({ email, password }) {
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
    },
    async mixSignUpAnUser({ email, password, username, fullname }) {
      try {
        // Call to the graphql mutation
        const { data } = await this.$router.app.$apollo.mutate({
          mutation: SIGN_UP_MUTATION,
          variables: {
            email,
            password,
            username,
            fullname
          }
        })

        // TODO: Show a successfull popup
        // if(data.signUp) { }

        this.$router.push('/login')
      } catch (err) {
        // dispatch('displayError', { err, msg: 'Error in signUp' })
      }
    }
  }
}
