<template>
  <div class="home custom-container">
    <RecentPlants :plants="recentPlants" />
    <ListPlants :plants="plants" @item-clicked="goToDetail" />
  </div>
</template>

<script>
import ListPlants from '@/views/home/components/ListPlants'
import RecentPlants from '@/views/home/components/RecentPlants'
import { mapActions } from 'vuex'
import { ROUTES } from '@/constants'

export default {
  name: 'HomeView',
  components: {
    ListPlants,
    RecentPlants
  },
  data: () => ({
    plants: [],
    recentPlants: []
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      listPlants: 'plants/listPlants',
      listRecentPlants: 'plants/listRecentPlants'
    }),
    async loadData() {
      this.plants = await this.listPlants()
      this.recentPlants = await this.listRecentPlants()
    },
    goToDetail(plantId) {
      this.$router.push({ name: ROUTES.DETAIL.name, params: { id: plantId } })
    }
  }
}
</script>
