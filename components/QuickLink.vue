<template>
  <div class="quick-link bg-app-light text-gray-700 border-r" style="grid-area: quicklink">
    <section class="flex flex-col items-center">
      <nuxt-link class="mt-3" to="/"><icon icon="compass" size="lg"/></nuxt-link>
      <a class="mt-2" href="#"><icon icon="message-sq" size="lg"/></a>
      <a class="mt-2" href="#"><icon icon="zap" size="lg"/></a>
      <a class="mt-2" @click.prevent="toggleChatModel" href="#"><icon icon="plus" size="lg"/></a>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { CHAT_SUBSCRIPTION } from '~/gql'
import Icon from '~/components/ui/Icon.vue'

export default {
  props: {
    authUser: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      toggleChatModel: 'app/toggleChatModel',
      handleChatSubscription: 'chats/handleChatSubscription'
    })
  },
  apollo: {
    // Subscriptions
    $subscribe: {
      // When a tag is added
      chatSubscription: {
        query: CHAT_SUBSCRIPTION,
        // Reactive variables
        variables() {
          // This works just like regular queries
          // and will re-subscribe with the right variables
          // each time the values change
          return {
            currentUserId: this.authUser.id
          }
        },
        // Result hook
        // Don't forget to destructure `data`
        result({ data }) {
          this.handleChatSubscription(data.chat)
        }
      }
    }
  },
  components: {
    Icon
  }
}
</script>
