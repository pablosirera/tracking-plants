<template>
  <div class="home custom-container">
    <p v-if="user" class="pb-10">
      Bienvenido,<br />
      <span class="text-2xl font-bold text-red-main-400">
        {{ user.displayName }}
      </span>
    </p>
    <RecentPlants :plants="recentPlants" />
    <ListPlants :plants="plants" @item-clicked="goToDetail" />
  </div>
</template>

<script>
import ListPlants from '@/views/home/components/ListPlants'
import RecentPlants from '@/views/home/components/RecentPlants'
import { mapActions, mapState } from 'vuex'
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
  computed: {
    ...mapState('auth', ['user'])
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
