<template>
  <section>
    <h1 class="font-bold text-2xl">Nueva planta</h1>
    <form class="mt-8" @submit.prevent="onSubmit">
      <Autocomplete
        :items="plants"
        @input="onChangeAutocomplete"
        @select-item="onSelectItem"
      />
      <div class="flex justify-center mt-8">
        <button
          type="submit"
          class="border py-2 px-6 rounded bg-green-600 text-white font-bold"
        >
          Guardar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete'
import { PlantsService } from '@/services'

export default {
  name: 'AddView',
  components: {
    Autocomplete
  },
  data: () => ({
    plants: [],
    currentPlant: null
  }),
  methods: {
    async onChangeAutocomplete(value) {
      if (value.length >= 3) {
        this.plants = await PlantsService.findPlant(value)
        return
      }

      this.plants = []
    },
    onSelectItem(item) {
      this.currentPlant = item
      this.plants = []
    },
    onSubmit() {
      console.log(this.currentPlant.id)
    }
  }
}
</script>
