import { myPlantsCollection } from '@/configFirebase'

export default {
  async savePlant(_, payload) {
    const response = await myPlantsCollection.doc(payload.id.toString()).set({
      name: payload.name,
      id: payload.id,
      link: payload.link
    })
    console.log(response)
  },
  async listPlants({ commit }) {
    const response = await myPlantsCollection.get()
    const parsedData = response.docs.map(item => {
      return item.data()
    })
    commit('setPlants', parsedData)
    return parsedData
  },
  async getPlant(_, plantId) {
    const response = await myPlantsCollection.doc(plantId.toString()).get()
    return response.data()
  }
}
