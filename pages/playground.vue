<template>
  <section class="h-screen bg-gray-100">
    <div class="max-w-sm pt-40 mx-auto">
      <a href="#">hadf</a>
      <MultiSelect :options="users" />
      <br />
      <br />
      <br />
      <!-- <InputWithPlate :options="users"> </InputWithPlate> -->
      <a href="#">hadf</a>
      <a href="#">hadf</a>
    </div>
  </section>
</template>

<script>
import MultiSelect from '~/components/ui/MultiSelect.vue'
import InputWithPlate from '~/components/ui/InputWithPlate.vue'

export default {
  data() {
    return {
      users: [
        {
          id: '1',
          username: 'hasansujon973',
          name: 'hasan mahmud'
        },
        {
          id: '2',
          username: 'sakanaka',
          name: 'mokblu khondokar'
        },
        {
          id: '3',
          username: 'hasan',
          name: 'sokina banu'
        },
        {
          id: '4',
          username: 'hasan',
          name: 'morjuna begum'
        },
        {
          id: '5',
          username: 'hasan',
          name: 'Monsur Ali'
        }
      ]
    }
  },
  components: {
    MultiSelect,
    InputWithPlate
  }
}
</script>

<style></style>
