<template>
  <section class="h-screen bg-gray-100">
    <div class="max-w-sm pt-40 mx-auto">
      <p>{{ msValue }}</p>
      <MultiSelect placeholder="Type the name of a person." v-model="msValue" :options="users" />
      <!-- <d-m-select></d-m-select> -->
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
// import DMSelect from '~/components/ui/DMSelect.vue'
import InputWithPlate from '~/components/ui/InputWithPlate.vue'

export default {
  data() {
    return {
      msValue: null,
      hmm: ['kuddus ali khan', 'motaleb hossain', 'mokles udding khan', 'sokina begurm'],
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
    // DMSelect,
    MultiSelect,
    InputWithPlate
  }
}
</script>

<style></style>
