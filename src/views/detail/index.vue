<template>
  <section class="relative">
    <div class="h-screen bg-green-400 flex justify-between p-8" v-if="plant">
      <h1 class="text-3xl capitalize font-bold">{{ plant.name }}</h1>
      <img
        v-if="plant.images && plant.images.length"
        class="w-56 rounded-lg h-40 mt-4"
        :src="plant.images[1].url"
      />
    </div>
    <div class="detail-body bg-white absolute w-full h-full p-8">
      <div>
        <p class="font-bold">¿Has regado tu planta hoy?</p>
        <ToggleButton
          v-model="isWaterPlant"
          :labels="{ checked: 'SI', unchecked: 'NO' }"
          @change="onChangeToggleButton"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'
import { mapGetters, mapActions } from 'vuex'
import { PlantsService } from '@/services'

export default {
  name: 'Detail',
  components: {
    ToggleButton
  },
  props: {
    id: {
      type: [Number, String]
    }
  },
  data: () => ({
    plant: [],
    isWaterPlant: false
  }),
  computed: {
    ...mapGetters('plants', ['getCurrentPlant'])
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions('plants', ['getPlant', 'updatePlant']),
    async loadData() {
      let currentPlant = this.getCurrentPlant(+this.id)

      if (!(currentPlant && currentPlant.length)) {
        currentPlant = await this.getPlant(this.id)
      }

      const plant = await PlantsService.fetchPlantWithURL(currentPlant.id)
      this.plant = {
        ...currentPlant,
        ...plant
      }
    },
    onChangeToggleButton(value) {
      if (value.value) {
        const today = new Date()
        const hasWaterPlant =
          this.plant.waterPlant && this.plant.waterPlant.length
        const waterPlant = hasWaterPlant
          ? [...this.plant.waterPlant, today]
          : [today]

        const data = {
          id: this.plant.id,
          data: waterPlant
        }
        this.updatePlant(data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-body {
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  top: 200px;
}
</style>
