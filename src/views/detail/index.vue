<template>
  <section class="relative">
    <div class="h-64 bg-green-400 flex justify-between" v-if="plant">
      <h1>{{ plant.name }}</h1>
      <img class="w-64 rounded-lg h-40 mt-4" :src="plant.images[1].url" />
    </div>
    <div class="detail-body bg-white absolute w-full h-full p-8">
      hello
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { PlantsService } from '@/services'

export default {
  name: 'Detail',
  props: {
    id: {
      type: [Number, String]
    }
  },
  data: () => ({
    plant: []
  }),
  computed: {
    ...mapGetters('plants', ['getCurrentPlant'])
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions('plants', ['getPlant']),
    async loadData() {
      let currentPlant = this.getCurrentPlant(+this.id)

      if (!(currentPlant && currentPlant.length)) {
        currentPlant = await this.getPlant(this.id)
      }

      this.plant = await PlantsService.fetchPlantWithURL(currentPlant.id)
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
