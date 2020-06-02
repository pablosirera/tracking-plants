<template>
  <div class="home">
    <ListPlants :plants="plants" @item-clicked="goToDetail" />
  </div>
</template>

<script>
import ListPlants from '@/views/home/components/ListPlants'
import { mapActions } from 'vuex'
import { ROUTES } from '@/constants'

export default {
  name: 'HomeView',
  components: {
    ListPlants
  },
  data: () => ({
    plants: []
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      listPlants: 'plants/listPlants'
    }),
    async loadData() {
      this.plants = await this.listPlants()
    },
    goToDetail(plantId) {
      this.$router.push({ name: ROUTES.DETAIL.name, params: { id: plantId } })
    }
  }
}
</script>
