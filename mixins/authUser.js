import { ME_QUERY, SIGN_OUT_MUTATION, SIGN_IN_MUTATION, SIGN_UP_MUTATION } from '../gql'

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
          this.$store.dispatch('user/resetUserState')
          this.$store.dispatch('chats/resetChatsState')
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
          // console.log(data.signIn)
          //   this.$router.push('/')
          window.location = 'http://localhost:3000'
          // TODO: Move base_url to process.env
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
    },
    async mixGetAuthUserOnFirstLoad() {
      console.info('app first load from mixin')
      // Runs on App first loads
      try {
        const { data } = await this.$apollo.query({
          query: ME_QUERY
        })

        if (data.me) {
          // set authUser & chatList & redirect
          // console.log('first load ', data.me)
          const { chats, ...user } = data.me
          this.$store.dispatch('user/setAuthUser', user)
          this.$store.dispatch('chats/setChatList', chats)
          // this.$router.push('/')
        } else {
          console.log('redirect from mix else')
          this.$router.push('/login')
        }
      } catch (err) {
        console.log('redirect from mix err')
        this.$router.push('/login')
        // dispatch('displayerror', { err, msg: 'error in getauthuseronapploads' })
      }
    }
  }
}
