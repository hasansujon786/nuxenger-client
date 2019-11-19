<template>
  <div class="absolute">
    <button
      tabindex="-1"
      @click="toggleChatModel"
      class="fixed inset-0 w-full h-full cursor-default bg-gray-900 opacity-50"
    ></button>

    <div class="relative z-10 shadow-md inline-block rounded-lg bg-white border">
      <div
        class="px-3 py-1 rounded-t-lg capitalize border-b font-semibold text-gray-600 bg-gray-100 text text-xs"
      >
        Create new message
      </div>
      <section class="px-6 py-4">
        <form @submit.prevent="handleNewDmSubmitForm" class="relative" style="width: 400px">
          <ui-input v-model="title" ref="nameInput" placeholder="Chat Name" height="h-12" />

          <multi-select
            class="mt-3"
            :options="users"
            v-model="selectedUsers"
            placeholder="Type the name of a person"
          ></multi-select>

          <ui-button :primary="true" :disabled="false" class="w-full mt-3">Create</ui-button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { USERS_QUERY } from '~/gql'
import { usersMixins, chatMixins } from '~/mixins'
import Input from '~/components/ui/Input.vue'
import Button from '~/components/ui/Button.vue'
import MultiSelect from '~/components/ui/MultiSelect.vue'

export default {
  data() {
    return {
      users: [],
      title: '',
      selectedUsers: []
    }
  },
  computed: {
    ...mapGetters({authUser: 'user/getauthUser'})
  },
  methods: {
    ...mapActions({ toggleChatModel: 'app/toggleChatModel' }),
    async onFirstLoad() {
      // focus on the name input fiesl
      this.$refs.nameInput.$el.focus()
      this.handleClickOnEsc()
      // Get all users
      this.users = await this.mixGetUsers()
    },
    handleClickOnEsc() {
      const handleEsc = e => {
        if (e.key === 'Esc' || e.key === 'Escape') {
          this.toggleChatModel()
        }
      }

      document.addEventListener('keydown', handleEsc)
      this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('keydown', handleEsc)
      })
    },
    handleNewDmSubmitForm() {
      // TODO: validatae inputs
      const userIds = this.selectedUsers.filter(filtUser => filtUser.id !== this.authUser.id).map(mapUser => mapUser.id)

      this.mixStartGroupChat({title: this.title, userIds})
      this.toggleChatModel()
    }
  },
  mounted() {
    this.onFirstLoad()
  },
  components: {
    MultiSelect,
    uiInput: Input,
    uiButton: Button
  },
  mixins: [usersMixins, chatMixins]
}
</script>

<style></style>
