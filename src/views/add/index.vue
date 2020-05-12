<template>
  <section class="mt-20">
    <div class="flex justify-center">
      <img
        class="w-48"
        src="@/assets/images/botanical.svg"
        alt="Imagen cactus"
      />
    </div>
    <h1 class="font-bold text-2xl text-center mt-4">Nueva Planta</h1>
    <form class="mt-8" @submit.prevent="onSubmit">
      <Autocomplete
        :items="plants"
        @input="onChangeAutocomplete"
        @select-item="onSelectItem"
        @clear-item="clearItems"
      />
      <div class="flex justify-center mt-8">
        <TheButton size="large">Guardar</TheButton>
      </div>
    </form>
  </section>
</template>

<script>
import Autocomplete from '@/components/ui/Autocomplete'
import TheButton from '@/components/ui/TheButton'
import { PlantsService } from '@/services'
import { mapActions } from 'vuex'

export default {
  name: 'AddView',
  components: {
    Autocomplete,
    TheButton
  },
  data: () => ({
    plants: [],
    currentPlant: null
  }),
  methods: {
    ...mapActions({
      savePlant: 'plants/savePlant'
    }),
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
    clearItems() {
      this.plants = []
    },
    onSubmit() {
      this.savePlant(this.currentPlant)
    }
  }
}
</script>
