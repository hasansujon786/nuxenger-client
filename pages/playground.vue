<template>
  <section class="h-screen bg-gray-100">
    <div class="p-40">
      <MultiSelect />
    </div>
    <div>
      <div id="menu" class="text-gray-700 border">
        <a>hover me</a>
        <input id="list" type="text" class="block" />
      </div>
    </div>
  </section>
</template>

<script>
import MultiSelect from '../components/ui/MultiSelect.vue'

export default {
  components: {
    MultiSelect,
  }
}
</script>

<style>
#menu #list {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
}

#menu:hover #list {
  max-height: 500px;
  transition: max-height 0.25s ease-in;
}
</style>
