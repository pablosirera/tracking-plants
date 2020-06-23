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
          :sync="true"
          :labels="{ checked: 'SI', unchecked: 'NO' }"
          @change="onChangeToggleButton"
        />
      </div>
      <div class="mt-6">
        <span
          @click="toggleCalendar"
          class="text-calendar block text-lg cursor-pointer font-bold hover:underline mb-3 text-blue-600"
          >Ver calendario de riego</span
        >
        <transition name="fade">
          <Calendar
            v-if="shouldShowCalendar"
            color="green"
            title-position="left"
            :attributes="attrs"
          />
        </transition>
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
    ToggleButton,
    Calendar: () => import('v-calendar/lib/components/calendar.umd')
  },
  props: {
    id: {
      type: [Number, String]
    }
  },
  data: () => ({
    plant: [],
    isWaterPlant: false,
    attrs: [],
    shouldShowCalendar: false
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
      this.checkWaterPlantToday()
      this.loadWaterPlantsDates()
    },
    checkWaterPlantToday() {
      if (this.plant.waterPlant && this.plant.waterPlant.length) {
        this.isWaterPlant = this.plant.waterPlant.some(date =>
          this.isToday(new Date(date))
        )
      }
    },
    isToday(date) {
      const today = new Date()
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      )
    },
    loadWaterPlantsDates() {
      this.attrs = this.plant.waterPlant.map(date => {
        return {
          highlight: true,
          dates: new Date(date)
        }
      })
    },
    onChangeToggleButton(value) {
      if (value.value) {
        this.savePlant()
      } else {
        this.removeLastPlant()
      }
    },
    toggleCalendar() {
      this.shouldShowCalendar = !this.shouldShowCalendar
    },
    async savePlant() {
      const today = new Date()
      const hasWaterPlant =
        this.plant.waterPlant && this.plant.waterPlant.length
      const waterPlant = hasWaterPlant
        ? [...this.plant.waterPlant, today.toISOString()]
        : [today.toISOString()]

      const data = {
        id: this.plant.id,
        data: waterPlant
      }
      await this.updatePlant(data)
      this.loadData()
    },
    async removeLastPlant() {
      this.plant.waterPlant.pop()
      const data = {
        id: this.plant.id,
        data: this.plant.waterPlant
      }
      await this.updatePlant(data)
      this.loadData()
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-body {
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  top: 200px;

  .text-calendar {
    width: fit-content;
  }
}
</style>
