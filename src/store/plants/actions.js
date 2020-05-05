import { myPlantsCollection } from '@/configFirebase'

export default {
  // eslint-disable-next-line no-unused-vars
  async savePlant({ commit }, payload) {
    const response = await myPlantsCollection.doc(payload.id.toString()).set({
      name: payload.name,
      id: payload.id,
      link: payload.link
    })
    console.log(response)
  }
}
