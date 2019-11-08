import { USERS_QUERY } from '../gql'

export const usersMixins = {
  methods: {
    async mixGetUsers() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: USERS_QUERY
        })

        if (data.users) {
          return data.users
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
