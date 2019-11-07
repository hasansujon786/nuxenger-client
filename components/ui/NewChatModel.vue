<template>
  <div class="absolute">
    <button
      tabindex="-1"
      @click="$emit('toggle')"
      class="fixed inset-0 w-full h-full cursor-default bg-gray-900 opacity-50"
    ></button>

    <div class="relative z-10 shadow-md inline-block rounded-lg bg-white overflow-hidden border">
      <div
        class="px-3 py-1 capitalize border-b font-semibold text-gray-600 bg-gray-100 text text-xs"
      >
        Create new message
      </div>
      <section class="px-6 py-4">
        <div class="" style="width: 400px">
          <ui-input placeholder="Name" height="h-12" />
          <ui-input placeholder="To: " height="h-12" class="mt-2" />
          <ui-button :primary="true" @click="handleExit" :disabled="false" class="w-full mt-2"
            >Create</ui-button
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Input from '~/components/ui/Input.vue'
import Button from '~/components/ui/Button.vue'

export default {
  methods: {
    handleItemClick() {
      // this.$emit('toggle')
      // this.$emit('item-click', item)
      // this.$refs.link.focus()
    },
    handleExit() {
      // this.$emit('toggle')
      // this.$refs.link.focus()
      // alert('button clied')
    }
  },
  components: {
    uiInput: Input,
    uiButton: Button
  }
}
</script>

<style></style>
