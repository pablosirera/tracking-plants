<template>
  <section class="mt-20 custom-container">
    <div class="flex justify-center">
      <img
        class="w-48"
        src="@/assets/images/botanical.svg"
        alt="Imagen cactus"
      />
    </div>
    <h1 class="font-bold text-2xl text-center mt-4">Nueva Planta</h1>
    <AddPlantForm
      :plants="plants"
      @submit-form="onSubmit"
      @find-plant="findPlant"
      @clear-items="clearItems"
    />
  </section>
</template>

<script>
import AddPlantForm from './components/AddPlantForm'
import { PlantsService } from '@/services'
import { mapActions } from 'vuex'

export default {
  name: 'AddView',
  components: {
    AddPlantForm
  },
  data: () => ({
    plants: []
  }),
  methods: {
    ...mapActions({
      savePlant: 'plants/savePlant'
    }),
    async findPlant(value) {
      this.plants = await PlantsService.findPlant(value)
    },
    clearItems() {
      this.plants = []
    },
    onSubmit(currentPlant) {
      const parsePlant = {
        ...currentPlant,
        dueDate: new Date().toISOString()
      }
      this.savePlant(parsePlant)
    }
  }
}
</script>
